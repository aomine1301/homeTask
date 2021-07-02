import React from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import { publicRoutes } from './routes';
import { SIGNIN_ROUTE } from './utils/constRoutes';
import AppLayout from './layouts/AppLayout';
import AuthLayout from './layouts/AuthLayout';

const isAuth = false;
const Global = createGlobalStyle`
  * {
    font-family: Roboto, sans-serif;
  }`;

interface AppRouterProps {
}

export const AppRouter: React.FC<AppRouterProps> = () => {
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

interface RoutingProps {
}

const Routing:React.FC<RoutingProps> = () => (isAuth ? (
  <>
    <Global />
    <AppLayout />
  </>
)
  : (
    <>
      <Global />
      <AuthLayout />
    </>
  ));
export default Routing;
