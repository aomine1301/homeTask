import React, { useState } from 'react';
import { useHistory, NavLink } from 'react-router-dom';
import styled from 'styled-components';
import InputStyled from '../../components/styledComponets/Input';
import ButtonStyled from '../../components/styledComponets/Button';

const StyledDivApp = styled.div`
  display: block;
  margin: 0 auto;
  max-width: 360px;
`;
const StyledH1App = styled.h1`
  width: 360px;
  height: auto;
  margin: 112px 83px 16px auto;
  text-align: center;

`;
const StyledP = styled.p<{ margin?: string }>`
  width: 220px;
  height: auto;
  margin: ${({ margin }) => margin || '0 auto 0 auto'};
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 14px;
  text-align: center;
`;
const StyledLink = styled(NavLink)`
  display: inline-block;
  vertical-align: middle;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
  /* identical to box height */

  text-align: center;
  text-decoration-line: underline;

  color: #939393;
`;
const StyleSpan = styled.span`
  vertical-align: center;
  font-size: 12px;
  line-height: 14px;
`;

interface SinnUpProps {

}

const SignUpStep1: React.FC<SinnUpProps> = () => {
  const history = useHistory();
  const [inputEmailValue, setInputUsernameValue] = useState<string>('');
  const handleEmailValueChange = (event: React.ChangeEvent<HTMLInputElement>):void => {
    setInputUsernameValue(event.target.value);
  };
  const handleButtonSignUpClick = ():void => {
    history.push('/signUpStep2'); // колхоз))
    return console.log({
      email: inputEmailValue,
    });
  };
  return (
    <StyledDivApp>
      <StyledH1App>Create Your Account</StyledH1App>
      <StyledP style={{ marginBottom: '60px' }}>
        Try the sensation of ease in managing all school activities in one
        board
      </StyledP>
      <div>
        <InputStyled placeholder="Your Email" value={inputEmailValue} onChange={handleEmailValueChange} />
        <ButtonStyled onClick={handleButtonSignUpClick}>Continue</ButtonStyled>
        <StyledP margin="60px auto 0 auto">by sign up, you agree to get study</StyledP>
        <StyledP>
          <StyledLink to="#">Terms of Service</StyledLink>
          {' '}
          <StyleSpan>and </StyleSpan>
          {' '}
          <StyledLink to="#">
            Privacy
            Policy
          </StyledLink>
          {' '}

        </StyledP>
      </div>
    </StyledDivApp>
  );
};

export default SignUpStep1;
