import React, {PropTypes, Component} from 'react';
import Issue from './Issue';
import IssueDetail from '../containers/IssueDetail';

export default class Issues extends Component {
  static propTypes = {
    issues: PropTypes.array.isRequired,
    selectedIssueId: PropTypes.number
  }

  render() {
    const {selectedIssueId, issues, onIssueClick} = this.props;
    return (
      <div className="issues">
        {selectedIssueId &&
          <IssueDetail issue={selectedIssueId} />
        }
        {
          issues.map((issue) => {
            return (
              <Issue
                key={issue.id}
                id={issue.id}
                number={issue.number}
                title={issue.title}
                labels={issue.labels}
                user={issue.user}
                body={issue.body}
                onIssueClick={onIssueClick}
              />
            );
          })
        }
      </div>
    );
  }
}
