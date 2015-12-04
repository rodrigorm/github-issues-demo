import React                  from 'react';
import { bindActionCreators } from 'redux';
import { connect }            from 'react-redux';
import userActions            from 'actions/user';
import { Link }               from 'react-router';
import Icon                   from 'react-fa';

const mapStateToProps = (state, props) => ({
  model: state.user
});
export class UserView extends React.Component {
  static propTypes = {
    model: React.PropTypes.object
  }

  render () {
    const { model } = this.props;
    return (
      <ul className="user-repos">
        {model.repos.map(repo => (
        <li key={repo.name}>
          <ul className="repo-info">
            {repo.language ? <li>{repo.language}</li> : null}
            <li><Icon name="star" /> {repo.stargazers_count}</li>
            <li><Icon name="code-fork" /> {repo.forks_count}</li>
            <li><Icon name="bug" /> {repo.open_issues_count}</li>
          </ul>
          <h3><Link to={'/' + model.login + '/' + repo.name}>{repo.name}</Link></h3>
          {repo.description ?
            <p className="description">The source for {repo.description}</p>
          : null}
          <p className="updated">Updated {repo.pushed_at}</p>
        </li>
      ))}
      </ul>
    );
  }
}

export default connect(mapStateToProps, null)(UserView);
