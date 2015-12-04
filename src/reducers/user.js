import { createReducer }     from '../utils';
import { REQUEST_USER, RECEIVE_USER } from 'constants/user';

const initialState = {};

export default createReducer(initialState, {
  [RECEIVE_USER]: (state, payload) => (payload)
});
