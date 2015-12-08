import { RECEIVE_REPO } from 'constants/repo';

const receive = (repo) => ({ type : RECEIVE_REPO, payload: repo });

export default {
  receive,
  fetch: (login, repoName) => (dispatch) => {
    dispatch(receive({}));

    $.getJSON(`https://api.github.com/repos/${login}/${repoName}`)
    .then(repo => {
      $.getJSON(`https://api.github.com/repos/${login}/${repo.name}/issues?per_page=100`).then(issues => {
        dispatch(receive({...repo, issues}));
      });
    });
  }
};
