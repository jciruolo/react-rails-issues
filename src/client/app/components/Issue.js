import React, {PropTypes, Component} from 'react';
import ReactMarkdown from 'react-markdown';
import {atMentionsToGithubMarkdownLinks} from '../lib/stringUtils';
import User from './User';

export default class Issue extends Component {
  static propTypes = {
    id: PropTypes.number.isRequired,
    body: PropTypes.string.isRequired,
    number: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    user: PropTypes.object.isRequired,
    isAbstract: PropTypes.bool,
    onIssueClick: PropTypes.func,
    labels: PropTypes.array,
    issue: PropTypes.object
  }

  static defaultProps = {
    isAbstract: true
  }

  handleClick = (e) => {
    const {isAbstract, id, onIssueClick} = this.props;
    if (isAbstract) {
      onIssueClick(id);
    }
  }

  trimSummary(summary) {
    const MAX_LENGTH = 140;
    let trimmedString = summary.substr(0, MAX_LENGTH);
    // Trim again if we're in the middle of a word
    trimmedString = trimmedString.substr(0, Math.min(trimmedString.length, trimmedString.lastIndexOf(" ")))
    return `${trimmedString}...`;
  }

  renderBody() {
    const {isAbstract, body} = this.props;
    if (body === '') {
      return <em className="no-description">No description provided</em>;
    }
    const bodyContent = (isAbstract) ? this.trimSummary(body) : body;
    if (bodyContent !== '') {
      return <ReactMarkdown className="markdown-wrapper" transformLinkUri={null} source={atMentionsToGithubMarkdownLinks(bodyContent)} />;
    }
  }

  renderLabels() {
    const {labels} = this.props;
    if (labels.length === 0) {
      return null;
    }
    return (
      labels.map((label, index) => {
        return (
          <div key={`${label.name}_${index}`} className="label">
            <span style={{backgroundColor: `#${label.color}`}} />
            {label.name}
          </div>
        );
      })
    );
  }

  render() {
    const {id, number, title, user, isAbstract} = this.props;
    return (
      <div className="issue" onClick={this.handleClick}>
        {this.renderLabels()}
        <h2>
          <span>#{number}</span>
          {title}
        </h2>
        { isAbstract ?
          <div>
            <div className="bodyWrap">
              {this.renderBody()}
            </div>
            <User user={user} />
          </div>
        : this.renderBody()
        }
      </div>
    );
  }
}