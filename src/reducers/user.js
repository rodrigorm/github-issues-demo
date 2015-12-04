import { createReducer }     from '../utils';
import { REQUEST_USER, RECEIVE_USER } from 'constants/user';

const initialState = {};

export default createReducer(initialState, {
  [REQUEST_USER] : (state, payload) => ({
    name: payload,
    avatar_url: `https://identicons.github.com/${payload}.png?v=1`,
  }),
  [RECEIVE_USER]: (state, payload) => (payload)
});
