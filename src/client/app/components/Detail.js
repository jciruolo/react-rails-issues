import React, {PropTypes, Component} from 'react';
import ReactMarkdown from 'react-markdown';
import {atMentionsToGithubMarkdownLinks} from '../lib/stringUtils';
import Issue from './Issue';
import User from './User';

export default class Detail extends Component {
  static propTypes = {
    issue: PropTypes.object.isRequired,
    onCloseIssue: PropTypes.func.isRequired,
    onGetComments: PropTypes.func.isRequired,
    comments: PropTypes.array
  }

  componentDidMount() {
    const {issue, onGetComments} = this.props;
    if (issue.comments > 0) {
      onGetComments(issue.comments_url);
    }
  }

  render() {
    const {onCloseIssue, issue, comments} = this.props;
    return (
      <div className="lightbox">
        <div>
          <button className="closeIssue" onClick={onCloseIssue}>☓</button>
          <div className="lightbox-panel summary">
            <Issue
              id={issue.id}
              number={issue.number}
              title={issue.title}
              labels={issue.labels}
              user={issue.user}
              body={issue.body}
              isAbstract={false}
            />
          </div>
          <User user={issue.user} />
          <div className="lightbox-panel comments">
            <h2>Comments ({comments.length})</h2>
            {
              comments.map((comment) => {
                return (
                  <div className="comment" key={comment.id}>
                    <div className="bodyWrap">
                      <ReactMarkdown transformLinkUri={null} source={atMentionsToGithubMarkdownLinks(comment.body)} />
                    </div>
                    <User user={comment.user} />
                  </div>
                );
              })
            }
          </div>
        </div>
      </div>
    );
  }
}
