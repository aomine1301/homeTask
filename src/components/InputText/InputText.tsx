import React from 'react';
import classes from './InputText.module.css';

interface inputPropsType {
    value?: string
    placeholder: string
    id?: string
    disabled?: boolean
    // eslint-disable-next-line no-unused-vars
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export const InputText: React.FC<inputPropsType> = ({
  onChange, placeholder, id = '', disabled, value = '',
}) => (
  <input
    id={id}
    className={classes.InputText}
    placeholder={placeholder}
    onChange={onChange}
    disabled={disabled}
    value={value}
  />
);

export default InputText;
