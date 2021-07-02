import styled from "styled-components";
import React from "react";

const Style = styled.input`
  display: block;
  width: 100%;
  box-sizing: border-box;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 16px;
  color: #BEBEBE;
  padding: 12px 15px;
  border: 1px solid #E3E3E3;
  border-radius: 5px;
  margin-bottom: 15px;
  &:focus{
    outline: none;
    border: 1px solid #c3c3c3;
  }
  &::placeholder{
    color: #BEBEBE;
  }
`;

interface ButtonProps {
    placeholder:string
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
    value?:string
    margin?:string
    disabled?:boolean
}

const InputStyled:React.FC<ButtonProps> =(props) =>{
    return <Style {...props}>

    </Style>
}
export default InputStyled
