import React from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';
import { publicRoutes } from './routes';
import { SIGNIN_ROUTE } from './utils/constRoutes';

interface AppRouterProps {
}

const AppRouter: React.FC<AppRouterProps> = () => {
  const user = true;
  return user
    ? (
      <Switch>
        {publicRoutes.map(({
          path,
          Component,
        }) => <Route key={path} path={path} component={Component} exact />)}
        <Redirect to={SIGNIN_ROUTE} />
      </Switch>
    )
    : (
      <Switch>
        {}
      </Switch>
    );
};

export default AppRouter;
