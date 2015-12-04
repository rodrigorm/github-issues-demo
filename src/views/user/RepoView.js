import React                  from 'react';
import { bindActionCreators } from 'redux';
import { connect }            from 'react-redux';
import repoActions            from 'actions/repo';
import { Link }               from 'react-router';
import Icon                   from 'react-fa';

const mapStateToProps = (state, props) => ({
  username: props.params.username,
  repo_name: props.params.repo_name,
  model : state.repo
});
const mapDispatchToProps = (dispatch) => ({
  actions : bindActionCreators(repoActions, dispatch)
});
export class RepoView extends React.Component {
  static propTypes = {
    actions  : React.PropTypes.object,
    model    : React.PropTypes.object
  }

  componentWillMount() {
    this.props.actions.fetch(this.props.username, this.props.repo_name);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.repo_name !== this.props.repo_name) {
      this.props.actions.fetch(nextProps.repo_name);
    }
  }

  render () {
    const { model } = this.props;
    if (!model.id) return (<div />);

    return (
      <div>
        <div className="repo-header">
          <h1>
            <Icon name="book" />
            {' '}
            <span className="user"><Link to={'/' + model.owner.login}>{model.owner.login}</Link></span>
            {' '}/{' '}
            <span className="repo"><Link to={'/' + model.owner.login + '/' + model.name}>{model.name}</Link></span>
          </h1>
        </div>
        {this.props.children}
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RepoView);
