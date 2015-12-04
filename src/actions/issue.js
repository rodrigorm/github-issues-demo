import { RECEIVE_ISSUE } from 'constants/issue';

const receive = (issue) => ({ type : RECEIVE_ISSUE, payload: issue });

export default {
  receive,
  fetch: (login, repoName, issueNumber) => (dispatch) => {
    dispatch(receive({}));

    $.getJSON(`https://api.github.com/repos/${login}/${repoName}/issues/${issueNumber}?access_token=190705ee0dec7d5edb6fc11cae75623d817cc07f`)
    .then(issue => {
      $.getJSON(`https://api.github.com/repos/${login}/${repoName}/issues/${issue.number}/comments?access_token=190705ee0dec7d5edb6fc11cae75623d817cc07f`).then(comments => {
        dispatch(receive({...issue, comments}));
      });
    });
  }
};
