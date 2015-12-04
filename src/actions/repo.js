import { RECEIVE_REPO } from 'constants/repo';

const receive = (repo) => ({ type : RECEIVE_REPO, payload: repo });

export default {
  receive,
  fetch: (login, repoName) => (dispatch) => {
    dispatch(receive({}));

    $.getJSON(`https://api.github.com/repos/${login}/${repoName}?access_token=190705ee0dec7d5edb6fc11cae75623d817cc07f`)
    .then(repo => {
      $.getJSON(`https://api.github.com/repos/${login}/${repo.name}/issues?access_token=190705ee0dec7d5edb6fc11cae75623d817cc07f&per_page=100`).then(issues => {
        dispatch(receive({...repo, issues}));
      });
    });
  }
};
