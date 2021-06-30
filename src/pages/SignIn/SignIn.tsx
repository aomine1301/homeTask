import * as React from "react";
import logo from "../../assets/images/logo.svg";
import './SignIn.css';

interface SignInProps {

}


function SignIn(props: SignInProps) {
    return (
        <div className="App">
            <div className="AppLogo">
                <img className="AppLogoImage" src={logo} alt="logo"/>
                <p className="AppLogoTitle">Application</p>
            </div>
            <div>
                <input placeholder="Student ID" className="InputText"/>
                <input placeholder="Password" className="InputText"/>
                <a className="TextLink" href="#">Forgot Password ?</a>
                <a className="Button" href="#">Sign In</a>
                <div className="LineOr">
                    <hr/>
                    <span>or</span>
                </div>
                <a className="TextLink TextCenter" href="#">Create a new account</a>
            </div>
        </div>
    );
}

export default SignIn;
