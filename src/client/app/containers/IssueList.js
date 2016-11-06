import { connect } from 'react-redux';
import Issues from '../components/Issues';
import {selectIssue, fetchComments} from '../actions/actions';

const mapStateToProps = (state) => {
  return {
    selectedIssueId: state.selectedIssue,
    issues: state.issues
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onIssueClick: (id) => {
      dispatch(selectIssue(id))
    }
  }
}

const IssueList = connect(
  mapStateToProps,
  mapDispatchToProps
)(Issues)

export default IssueList