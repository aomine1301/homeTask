import * as React from 'react';
import {Switch,Redirect,Route} from 'react-router-dom'
import {publicRoutes} from "./routes";
import {LOGIN_ROUTES} from "./utils/constRoutes";


const AppRouter = () => {
    const user = true
    return user?
        (
        <Switch>
            {publicRoutes.map(({path,Component})=>
                <Route key={path} path={path} component={Component} exact={true}/>
            )}
            <Redirect to={LOGIN_ROUTES}/>
        </Switch>
    ):
        (
            <Switch>
                {}
            </Switch>
        )
};

export default AppRouter;
