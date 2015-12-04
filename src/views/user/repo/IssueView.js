import React                  from 'react';
import { bindActionCreators } from 'redux';
import { connect }            from 'react-redux';
import issueActions           from 'actions/issue';
import { Link }               from 'react-router';
import Icon                   from 'react-fa';
import IssueComment           from 'components/IssueComment';

const mapStateToProps = (state, props) => ({
  username: props.params.username,
  repo_name: props.params.repo_name,
  issue_number: props.params.issue_number,
  model : state.issue
});
const mapDispatchToProps = (dispatch) => ({
  actions : bindActionCreators(issueActions, dispatch)
});
export class IssueView extends React.Component {
  static propTypes = {
    actions  : React.PropTypes.object,
    model    : React.PropTypes.object
  }

  componentWillMount() {
    this.props.actions.fetch(this.props.username, this.props.repo_name, this.props.issue_number);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.issue_number !== this.props.issue_number) {
      this.props.actions.fetch(nextProps.issue_number);
    }
  }

  render () {
    const { model } = this.props;
    if (!model.id) return (<div />);

    return (
      <div>
        <div className="issue-header">
          <h2>{model.title} <span className="number">#{model.number}</span></h2>
          <p className="details">
            <span className="user"><Link to={'/' + model.user.login}>{model.user.login}</Link></span>
            opened this issue {model.created_at}
          </p>
        </div>

        <div className="issue-comments">
          <IssueComment comment={model} />

          {model.comments.map(comment => (
            <IssueComment key={comment.id} comment={comment} />
          ))}
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(IssueView);
