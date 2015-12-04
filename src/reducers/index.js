import { combineReducers }    from 'redux';
import { routeReducer }       from 'redux-simple-router';
import counter                from './counter';
import user                   from './user';
import repo                   from './repo';
import issue                  from './issue';

export default combineReducers({
  counter,
  user,
  repo,
  issue,
  routing: routeReducer
});
