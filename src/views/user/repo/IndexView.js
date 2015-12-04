import React                  from 'react';
import { bindActionCreators } from 'redux';
import { connect }            from 'react-redux';
import userActions            from 'actions/user';
import { Link }               from 'react-router';
import Icon                   from 'react-fa';
import MomentFromNow          from 'components/MomentFromNow';

const mapStateToProps = (state, props) => ({
  model: state.repo
});
export class UserView extends React.Component {
  static propTypes = {
    model: React.PropTypes.object
  }

  render () {
    const { model } = this.props;
    if (!model.id) return (<div />);

    return (
      <ul className='repo-issues'>
        {model.issues.map(issue => (
        <li key={issue.number}>
          <Icon name='bug' />
          {' '}
          <div className='comments'><Icon name='comment-o'/> {issue.comments}</div>
          <h3><Link to={'/' + model.owner.login + '/' + model.name + '/' + issue.number}>{issue.title}</Link></h3>
          <p className='details'>
            #{issue.number} opened <MomentFromNow date={issue.created_at} /> by <Link to={'/' + issue.user.login}>{issue.user.login}</Link>
          </p>
        </li>
        ))}
      </ul>
    );
  }
}

export default connect(mapStateToProps, null)(UserView);
