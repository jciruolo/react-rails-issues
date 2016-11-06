import { connect } from 'react-redux';
import PageControls from '../components/PageControls';
import {incrementPage, decrementPage, fetchIssues} from '../actions/actions';

const mapStateToProps = (state) => {
  return {
    currentPage: state.currentPage
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onNextPageClick: () => {
      dispatch(incrementPage());
      dispatch(fetchIssues());
    },
    onPrevPageClick: () => {
      dispatch(decrementPage());
      dispatch(fetchIssues());
    }
  }
}

const Pagination = connect(
  mapStateToProps,
  mapDispatchToProps
)(PageControls)

export default Pagination