import React                  from 'react';
import { bindActionCreators } from 'redux';
import { connect }            from 'react-redux';
import userActions            from 'actions/user';
import { Link }               from 'react-router';
import Icon                   from 'react-fa';

// We define mapStateToProps and mapDispatchToProps where we'd normally use
// the @connect decorator so the data requirements are clear upfront, but then
// export the decorated component after the main class definition so
// the component can be tested w/ and w/o being connected.
// See: http://rackt.github.io/redux/docs/recipes/WritingTests.html
const mapStateToProps = (state, props) => ({
  username: props.routeParams.username,
  model : state.user
});
const mapDispatchToProps = (dispatch) => ({
  actions : bindActionCreators(userActions, dispatch)
});
export class UserView extends React.Component {
  static propTypes = {
    actions  : React.PropTypes.object,
    model    : React.PropTypes.object
  }

  componentWillMount() {
    this.props.actions.fetch(this.props.username);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.username !== this.props.username) {
      this.props.actions.fetch(nextProps.username);
    }
  }

  render () {
    const { model } = this.props;
    if (!model.id) return (<div />);

    return (
      <div>
        <div className="user-header">
          <img className="avatar" height="120" src={model.avatar_url + '&s=240'} width="120" />
          <h1>{model.name}</h1>
          <ul className="user-details">
            {model.company ?
            <li>
              <Icon name="briefcase" />
              {' '}
              {model.company}
            </li>
            : null}

            {model.location ?
            <li>
              <Icon name="globe" />
              {' '}
              {model.location}
            </li>
            : null}

            {model.blog ?
            <li>
              <Icon name="link" />
              {' '}
              <a href="{model.blog}" target="_blank">{model.blog}</a>
            </li>
            : null}
          </ul>
          <ul className="user-tabs">
            <li className="active"><Icon name="book" /> Repositories <span className="badge">{model.public_repos || 0}</span></li>
          </ul>
        </div>
        {this.props.children}
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserView);
