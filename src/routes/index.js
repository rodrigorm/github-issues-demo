import React                 from 'react';
import { Route, IndexRoute } from 'react-router';
import CoreLayout            from 'layouts/CoreLayout';
import HomeView              from 'views/HomeView';
import AboutView             from 'views/AboutView';
import UserView              from 'views/UserView';
import UserIndexView         from 'views/user/IndexView';
import RepoView              from 'views/user/RepoView';
import RepoIndexView         from 'views/user/repo/IndexView';
import IssueView             from 'views/user/repo/IssueView';

export default (
  <Route            component={CoreLayout}   path='/'>
    <IndexRoute     component={HomeView} />
    <Route          component={AboutView}    path='/about' />
    <Route          component={UserView}     path='/:username'>
      <IndexRoute   component={UserIndexView} />
      <Route        component={RepoView} path=':repo_name'>
        <IndexRoute component={RepoIndexView} />
        <Route      component={IssueView} path=':issue_number' />
      </Route>
    </Route>
  </Route>
);
