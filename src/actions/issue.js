import { RECEIVE_ISSUE } from 'constants/issue';

const receive = (issue) => ({ type : RECEIVE_ISSUE, payload: issue });

export default {
  receive,
  fetch: (login, repo_name, issue_number) => ((dispatch, getState) => {
    dispatch(receive({}));

    $.getJSON(`https://api.github.com/repos/${login}/${repo_name}/issues/${issue_number}?access_token=190705ee0dec7d5edb6fc11cae75623d817cc07f`)
    .then(issue => {
      $.getJSON(`https://api.github.com/repos/${login}/${repo_name}/issues/${issue.number}/comments?access_token=190705ee0dec7d5edb6fc11cae75623d817cc07f`).then(comments => {
        dispatch(receive({...issue, comments}));
      });
    });
  })
};
