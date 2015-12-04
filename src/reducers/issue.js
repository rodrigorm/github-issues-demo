import { createReducer }     from '../utils';
import { RECEIVE_ISSUE } from 'constants/issue';

const initialState = {};

export default createReducer(initialState, {
  [RECEIVE_ISSUE]: (state, payload) => (payload)
});
