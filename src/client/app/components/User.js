import React, {PropTypes, Component} from 'react';

export default class User extends Component {
  static propTypes = {
    user: PropTypes.object.isRequired
  }

  onClick = (e) => {
    e.stopPropagation();
  }

  render() {
    const {user} = this.props;
    return (
      <div className="reporter">
        <a href={user.html_url} target="_blank" onClick={this.onClick}>
          <img src={user.avatar_url} />
          <span>{user.login}</span>
        </a>
      </div>
    );
  }
}
