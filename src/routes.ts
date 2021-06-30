import {LOGIN_ROUTES, REGISTER_ROUTES} from "./utils/constRoutes";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";

export const publicRoutes = [
    {
        path:LOGIN_ROUTES,
        Component:SignIn
    },
    {
        path:REGISTER_ROUTES,
        Component:SignUp
    }
]
