import { createReducer }     from '../utils';
import { RECEIVE_USER } from 'constants/user';

const initialState = {};

export default createReducer(initialState, {
  [RECEIVE_USER]: (state, payload) => (payload)
});
