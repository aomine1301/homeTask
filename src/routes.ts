import {
  FULL_REGISTRATION_ROUTE, SIGNIN_ROUTE, SIGNUP_ROUTE, SIGNUP_STEP2_ROUTE,
} from './utils/constRoutes';
import SignIn from './pages/SignIn';
import SignUpStep1 from './pages/SignUpStep1';
import FullRegistration from './pages/FullRegistration';
import SignUpStep2 from './pages/SignUpStep2';

export const publicRoutes = [
  {
    path: SIGNIN_ROUTE,
    Component: SignIn,
  },
  {
    path: SIGNUP_ROUTE,
    Component: SignUpStep1,
  },
  {
    path: FULL_REGISTRATION_ROUTE,
    Component: FullRegistration,
  },
  {
    path: SIGNUP_STEP2_ROUTE,
    Component: SignUpStep2,
  },

];
