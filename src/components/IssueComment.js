import React         from 'react';
import { Link }      from 'react-router';
import MomentFromNow from 'components/MomentFromNow';
import Marked        from 'components/Marked';
import Emojify       from 'components/Emojify';

const IssueComment = (props) => {
  const { comment } = props;
  return (
    <div>
      <Link to={'/' + comment.user.login}>
        <img className='avatar' height='48' width='48' src={comment.user.avatar_url + '&s=96'} />
      </Link>

      <div className='comment'>
        <p className='comment-header'>
          <span className='user'><Link to={'/' + comment.user.login}>{comment.user.login}</Link></span>
          {' '}
          commented <MomentFromNow date={comment.created_at} />
        </p>
        <div className='comment-body'>
          <Emojify>
            <Marked source={comment.body} />
          </Emojify>
        </div>
      </div>
    </div>
  );
};

IssueComment.propTypes = {
  comment : React.PropTypes.object.isRequired
};

export default IssueComment;
