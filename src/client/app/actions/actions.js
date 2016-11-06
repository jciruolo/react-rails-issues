import fetch from 'isomorphic-fetch';

// Actions
export const INCREMENT_PAGE = 'INCREMENT_PAGE';
export const DECREMENT_PAGE = 'DECREMENT_PAGE';
export const REQUEST_ISSUES = 'REQUEST_ISSUES';
export const RECEIVE_ISSUES = 'RECEIVE_ISSUES';
export const SELECT_ISSUE = 'SELECT_ISSUE';
export const DESELECT_ISSUE = 'DESELECT_ISSUE';
export const REQUEST_COMMENTS = 'REQUEST_COMMENTS';
export const RECEIVE_COMMENTS = 'RECEIVE_COMMENTS';


// Action creators
export function incrementPage() {
  return { type: INCREMENT_PAGE }
}

export function decrementPage() {
  return { type: DECREMENT_PAGE }
}

export function requestIssues(page) {
  return {
    type: REQUEST_ISSUES,
    page
  }
}

export function receiveIssues(page, json) {
  return {
    type: RECEIVE_ISSUES,
    page,
    issues: json
  }
}

export function selectIssue(id) {
  return {
    type: SELECT_ISSUE,
    selectedIssue: id
  }
}

export function deselectIssue() {
  return {
    type: DESELECT_ISSUE
  }
}

export function requestComments(commentsUrl) {
  return {
    type: REQUEST_COMMENTS,
    commentsUrl
  }
}

export function receiveComments(json) {
  return {
    type: RECEIVE_COMMENTS,
    comments: json
  }
}

// Thunk action creators
export function fetchIssues() {
  return (dispatch, getState) => {
    const currentPage = getState().currentPage;
    dispatch(requestIssues(currentPage));
    return fetch(`https://api.github.com/repos/rails/rails/issues?page=${currentPage}&per_page=25`)
      .then(response => response.json())
      .then(json =>
        dispatch(receiveIssues(currentPage, json))
      )
  }
}

export function fetchComments(commentsUrl) {
  return (dispatch, getState) => {
    dispatch(requestIssues(commentsUrl));
    return fetch(commentsUrl)
      .then(response => response.json())
      .then(json =>
        dispatch(receiveComments(json))
      )
  }
}
