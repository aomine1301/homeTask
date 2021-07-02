import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createGlobalStyle } from 'styled-components';
import AppLayout from './layouts/AppLayout';
import AuthLayout from './layouts/AuthLayout';

let routing;
const isAuth = false;
const Global = createGlobalStyle`
  * {
    font-family: Roboto, sans-serif;
  }`;

if (isAuth) {
  routing = (
    <>

      <AppLayout />
    </>

  );
} else {
  routing = (
    <>
      <Global />
      <AuthLayout />
    </>

  );
}

ReactDOM.render(routing, document.getElementById('root'));
