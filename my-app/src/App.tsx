import React from 'react';
import classes from './app.module.css';
import {Header} from "./pages/header/Header";
import {AuthorizationStep1} from "./pages/authorization/AuthorizationStep1";
import {AuthorizationStep2} from "./pages/authorization/AuthorizationStep2";

function App() {
    return (
        <div className={classes.App}>
            <Header/>
            <div className={classes.container}>
                <AuthorizationStep1/>
                <AuthorizationStep2/>
            </div>
        </div>
    );
}

export default App;
