import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import App from './App';
import SignIn from './pages/SignIn';

import Header from "./parts/Header";
import Footer from "./parts/Footer";
import AppRouter from "./AppRouter";

const routing = (
    <Router>
        <Header/>
        <AppRouter/>
        <Footer/>
    </Router>
);

const routingAuth = (
    <Router>
        <AppRouter/>
    </Router>
);


ReactDOM.render(routingAuth, document.getElementById("root"));


