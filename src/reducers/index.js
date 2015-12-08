import { combineReducers }    from 'redux';
import { routeReducer }       from 'redux-simple-router';
import user                   from './user';
import repo                   from './repo';
import issue                  from './issue';

export default combineReducers({
  user,
  repo,
  issue,
  routing: routeReducer
});
