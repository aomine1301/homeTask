import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from '../parts/Header';
import AppRouter from '../AppRouter';
import Footer from '../parts/Footer';

interface AuthLayoutProps {
}

const AuthLayout:React.FC<AuthLayoutProps> = () => (
  <Router>
    <Header />
    <AppRouter />
    <Footer />
  </Router>
);

export default AuthLayout;
