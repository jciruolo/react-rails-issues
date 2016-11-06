import React, {PropTypes, Component} from 'react';
import { connect } from 'react-redux';

export default class PageControls extends Component {
  static propTypes = {
    currentPage: PropTypes.number.isRequired,
    onPrevPageClick: PropTypes.func.isRequired,
    onNextPageClick: PropTypes.func.isRequired
  }
  render() {
    const {currentPage, onNextPageClick, onPrevPageClick} = this.props;
    return (
      <div className="pageControls">
        {(currentPage > 1) &&
          <button onClick={onPrevPageClick}>Previous</button>
        }
        <button onClick={onNextPageClick}>Next</button>
      </div>
    );
  }
}
