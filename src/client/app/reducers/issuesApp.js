import {  INCREMENT_PAGE,
          DECREMENT_PAGE,
          REQUEST_ISSUES,
          RECEIVE_ISSUES,
          SELECT_ISSUE,
          DESELECT_ISSUE,
          REQUEST_COMMENTS,
          RECEIVE_COMMENTS } from '../actions/actions';

const INITIAL_STATE = {
  currentPage: 1,
  issues: [],
  comments: []
}

const issuesApp = (state = INITIAL_STATE, action) => {
 switch (action.type) {
    case INCREMENT_PAGE:
      return Object.assign({}, state, {
        currentPage: state.currentPage + 1
      });
    case DECREMENT_PAGE:
      return Object.assign({}, state, {
        currentPage: state.currentPage - 1
      });
    case REQUEST_ISSUES:
      return Object.assign({}, state, {
        isFetching: true
      });
    case RECEIVE_ISSUES:
      return Object.assign({}, state, {
        isFetching: false,
        issues: action.issues
      });
    case SELECT_ISSUE:
      return Object.assign({}, state, {
        selectedIssue: action.selectedIssue
      });
    case DESELECT_ISSUE:
      let stateClone = Object.assign({}, state);
      delete stateClone.selectedIssue;
      return stateClone;
    case REQUEST_COMMENTS:
      return Object.assign({}, state, {
        isFetching: true
      });
    case RECEIVE_COMMENTS:
      return Object.assign({}, state, {
        isFetching: false,
        comments: action.comments
      });
    default:
      return state;
  };
};

export default issuesApp;