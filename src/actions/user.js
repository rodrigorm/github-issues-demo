
import { REQUEST_USER, RECEIVE_USER } from 'constants/user';

const request = (login) => ({ type : REQUEST_USER, payload: login });
const receive = (user) => ({ type : RECEIVE_USER, payload: user });

export default {
  request,
  receive,
  fetch: (login) => ((dispatch, getState) => {
    dispatch(request(login));
    $.getJSON(`https://api.github.com/users/${login}?access_token=190705ee0dec7d5edb6fc11cae75623d817cc07f`, function(user) {
      dispatch(receive(user));
    });
  })
};
