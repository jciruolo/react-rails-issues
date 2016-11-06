import { connect } from 'react-redux';
import { findWhere } from 'underscore';
import Detail from '../components/Detail';
import {deselectIssue, fetchComments} from '../actions/actions';

const mapStateToProps = (state) => {
  const issue = findWhere(state.issues, {id: state.selectedIssue});
  return {
    issue: issue,
    comments: state.comments
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onCloseIssue: (id) => {
      dispatch(deselectIssue(id))
    },
    onGetComments: (commentsUrl) => {
      dispatch(fetchComments(commentsUrl));
    }
  }
}

const IssueDetail = connect(
  mapStateToProps,
  mapDispatchToProps
)(Detail)

export default IssueDetail