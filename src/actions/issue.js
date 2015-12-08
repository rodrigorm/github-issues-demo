import { RECEIVE_ISSUE } from 'constants/issue';

const receive = (issue) => ({ type : RECEIVE_ISSUE, payload: issue });

export default {
  receive,
  fetch: (login, repoName, issueNumber) => (dispatch) => {
    dispatch(receive({}));

    $.getJSON(`https://api.github.com/repos/${login}/${repoName}/issues/${issueNumber}`)
    .then(issue => {
      $.getJSON(`https://api.github.com/repos/${login}/${repoName}/issues/${issue.number}/comments`).then(comments => {
        dispatch(receive({...issue, comments}));
      });
    });
  }
};
