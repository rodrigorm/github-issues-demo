import React                 from 'react';
import { Route, IndexRoute } from 'react-router';
import CoreLayout            from 'layouts/CoreLayout';
import HomeView              from 'views/HomeView';
import AboutView             from 'views/AboutView';
import UserView              from 'views/UserView';
import UserIndexView         from 'views/user/IndexView';
import UserRepoView          from 'views/user/RepoView';
import RepoIndexView         from 'views/user/repo/IndexView';

export default (
  <Route          component={CoreLayout}   path='/'>
    <IndexRoute   component={HomeView} />
    <Route        component={AboutView}    path='/about' />
    <Route        component={UserView}     path='/:username'>
      <IndexRoute component={UserIndexView} />
      <Route      component={UserRepoView} path=':repo_name'>
        <IndexRoute component={RepoIndexView} />
      </Route>
    </Route>
  </Route>
);
