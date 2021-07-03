import * as React from 'react';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import styled from 'styled-components';
import logo from '../../assets/images/logo.svg';
import ButtonStyled from '../../components/styledComponets/Button';
import InputStyled from '../../components/styledComponets/Input';

const StyledAppDiv = styled.div`
  padding: 0 40px;
  margin: 0 auto;
  max-width: 360px;
`;
const StyledAppLogoDiv = styled.div`
  margin: 150px auto 55px;
  text-align: center;
`;
const StyledAppLogoImage = styled.img`
  display: inline-block;
  vertical-align: middle;
  margin-right: 5px;
`;
const StyledAppP = styled.p`
  display: inline-block;
  vertical-align: middle;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 28px;
  color: #3F8EEC;
  margin: 0;
  cursor: default;
`;
export const StyledTextLink = styled(NavLink)`
  display: inline-block;
  vertical-align: middle;
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  line-height: 28px;
  color: #3F8EEC;
  margin: 0 auto;
  cursor: pointer;
`;
const StyledTextLinkCenter = styled(StyledTextLink)`
  width: 116px;
  height: 14px;
  text-align: center;
  margin: 0 123px;
`;
const StyledLineOr = styled.div`
  position: relative;
  margin: 35px 0 20px;

  hr {
    color: #E3E3E3;
    background-color: #E3E3E3;
    border: 0;
    height: 1px;
  }

  span {
    position: absolute;
    left: calc(50% - 10px);
    top: -7px;
    background-color: #fff;
    padding: 0 5px;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 14px;
    color: #BEBEBE;
  }
`;

interface SignInProps {

}

const SignIn: React.FC<SignInProps> = () => {
  const [inputUsernameValue, setInputUsernameValue] = useState<string>('');
  const [inputPasswordValue, setInputPasswordValue] = useState<string>('');

  const handleUsernameValueChange = (event: React.ChangeEvent<HTMLInputElement>):void => {
    setInputUsernameValue(event.target.value);
  };
  const handlePasswordValueChange = (event: React.ChangeEvent<HTMLInputElement>):void => {
    setInputPasswordValue(event.target.value);
  };
  // eslint-disable-next-line no-console
  const handleButtonSignInClick = ():void => console.log({
    username: inputUsernameValue,
    password: inputPasswordValue,
  });

  return (
    <StyledAppDiv className="App">
      <StyledAppLogoDiv>
        <StyledAppLogoImage src={logo} alt="logo" />
        <StyledAppP>Application</StyledAppP>
      </StyledAppLogoDiv>
      <div>
        <InputStyled
          placeholder="Student ID"
          onChange={handleUsernameValueChange}
          value={inputUsernameValue}
        />
        <InputStyled
          placeholder="Password"
          onChange={handlePasswordValueChange}
          value={inputPasswordValue}
        />
        <StyledTextLink to="#">Forgot Password ?</StyledTextLink>
        <ButtonStyled onClick={handleButtonSignInClick}>Sign In</ButtonStyled>
        <StyledLineOr>
          <hr />
          <span>or</span>
        </StyledLineOr>
        <StyledTextLinkCenter to="/signUp">Create a new account</StyledTextLinkCenter>
      </div>
    </StyledAppDiv>
  );
};

export default SignIn;
