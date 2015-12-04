import { RECEIVE_USER } from 'constants/user';

const receive = (user) => ({ type : RECEIVE_USER, payload: user });

export default {
  receive,
  fetch: (login) => ((dispatch, getState) => {
    dispatch(receive({
      name: login,
      avatar_url: `https://identicons.github.com/${login}.png?v=1`,
      repos: []
    }));

    $.getJSON(`https://api.github.com/users/${login}?access_token=190705ee0dec7d5edb6fc11cae75623d817cc07f`)
    .then(user => {
      dispatch(receive({user, repos: []}));

      $.getJSON(`https://api.github.com/users/${user.login}/repos?sort=pushed&direction=desc&per_page=100`).then(repos => {
        user.repos = repos;
        dispatch(receive(user));
      });
    });
  })
};
