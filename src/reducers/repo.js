import { createReducer }     from '../utils';
import { RECEIVE_REPO } from 'constants/repo';

const initialState = {};

export default createReducer(initialState, {
  [RECEIVE_REPO]: (state, payload) => (payload)
});
