import React from "react";
import logo from '../../assets/images/logo.svg';
import './SignUp.css';
import {NavLink} from "react-router-dom";

interface SinnUpProps{

}

function SignUp(props:SinnUpProps) {
    return (
        <div className="App">
            <div className="AppLogo">
                <img className="AppLogoImage" src={logo} alt="logo" />
                <p className="AppLogoTitle">Application</p>
            </div>
            <div>
                <input placeholder="email" className="InputText" />
                <input placeholder="Password" className="InputText" />
                <NavLink className="TextLink" to={'/'}>Forgot Password ?</NavLink>
                <NavLink className="Button" to={'#'}>Sign In</NavLink>
                <div className="LineOr">
                    <hr />
                    <span>or</span>
                </div>
                <a className="TextLink TextCenter" href="#">Create a new account</a>
            </div>
        </div>
    );
}

export default SignUp;
