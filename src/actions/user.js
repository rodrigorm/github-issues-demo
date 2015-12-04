import { RECEIVE_USER } from 'constants/user';

const receive = (user) => ({ type : RECEIVE_USER, payload: user });

export default {
  receive,
  fetch: (login) => (dispatch) => {
    dispatch(receive({}));

    $.getJSON(`https://api.github.com/users/${login}?access_token=190705ee0dec7d5edb6fc11cae75623d817cc07f`)
    .then(user => {
      $.getJSON(`https://api.github.com/users/${user.login}/repos?access_token=190705ee0dec7d5edb6fc11cae75623d817cc07f&sort=pushed&direction=desc&per_page=100`).then(repos => {
        dispatch(receive({...user, repos}));
      });
    });
  }
};
