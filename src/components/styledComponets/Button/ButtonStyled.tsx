import styled from 'styled-components';
import React from 'react';

const Style = styled.button<{ margin?: string }>`
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 16px;
  color: #FFFFFF;
  background: linear-gradient(90deg, #92BDF0 0%, #3F8EEC 100%);
  box-shadow: 0 15px 15px rgba(31, 112, 210, 0.15);
  border-radius: 5px;
  text-align: center;
  padding: 12px 0;
  display: block;
  width: 100%;
  box-sizing: border-box;
  text-decoration: none;
  margin: ${({ margin }) => margin || '0 auto 15px auto'};
  cursor: pointer;
`;

interface ButtonProps {
    onClick?: () => void
    margin?: string
}

const ButtonStyled: React.FC<ButtonProps> = (props) => (
  <Style {...props} />
);
export default ButtonStyled;
