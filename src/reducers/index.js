import { combineReducers }    from 'redux';
import { routeReducer }       from 'redux-simple-router';
import counter                from './counter';
import user                   from './user';

export default combineReducers({
  counter,
  user,
  routing: routeReducer
});
