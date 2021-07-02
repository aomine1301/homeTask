import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRouter from '../AppRouter';

interface AuthLayoutProps {
}

const AuthLayout:React.FC<AuthLayoutProps> = () => (
  <Router>
    <AppRouter />
  </Router>
);

export default AuthLayout;
