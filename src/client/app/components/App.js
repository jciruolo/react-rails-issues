import React, {Component} from 'react';
import {render} from 'react-dom';
import Pagination from '../containers/Pagination';
import IssueList from '../containers/IssueList';

export default class App extends Component {
  render () {
    return (
      <div>
        <IssueList />
        <Pagination />
      </div>
    );
  }
}
