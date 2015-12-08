import { RECEIVE_USER } from 'constants/user';

const receive = (user) => ({ type : RECEIVE_USER, payload: user });

export default {
  receive,
  fetch: (login) => (dispatch) => {
    dispatch(receive({}));

    $.getJSON(`https://api.github.com/users/${login}`)
    .then(user => {
      $.getJSON(`https://api.github.com/users/${user.login}/repos?sort=pushed&direction=desc&per_page=100`).then(repos => {
        dispatch(receive({...user, repos}));
      });
    });
  }
};
