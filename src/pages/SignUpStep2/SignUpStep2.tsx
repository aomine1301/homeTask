import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
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
  margin: 158px 84px 16px auto;
  text-align: center;

`;
const StyledP = styled.p<{ margin?: string, width?: string }>`
  width: ${(props) => props.width || '220px'};
  height: auto;
  padding: 0;
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

const SignUpStep2: React.FC<SinnUpProps> = () => (
  <StyledDivApp>
    <StyledH1App>Create Your Account</StyledH1App>
    <StyledP style={{ marginBottom: '60px' }}>
      Try the sensation of ease in managing all school activities in one
      board
    </StyledP>
    <div>
      <InputStyled placeholder="Your Email" value="grooo1301@gmail.com" disabled />
      <StyledP margin="16px 75px 0 75px">We sent verification code to your email.</StyledP>
      <StyledP width="210px" margin="0 75px 16px 75px">Please, enter below</StyledP>
      <InputStyled placeholder="Verification Code" />
      <ButtonStyled margin="16px 0 60 px 0">Sign Up</ButtonStyled>
      <StyledP margin="60px auto 0 auto">by sign up, you agree to get study</StyledP>
      <StyledP>
        <StyledLink to="#">Terms of Service</StyledLink>
        {' '}
        <StyleSpan>and </StyleSpan>
        {' '}
        <StyledLink
          to="#"
        >
          Privacy
          Policy
        </StyledLink>
        {' '}

      </StyledP>
    </div>
  </StyledDivApp>
);

export default SignUpStep2;
