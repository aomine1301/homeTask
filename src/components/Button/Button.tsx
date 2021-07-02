import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Button.module.css';

interface ButtonProps {
    name: string
    to?: string
    onClick: () => void
}

const Button: React.FC<ButtonProps> = ({ name, to = '#', onClick }) => (
  <NavLink
    className={classes.Button}
    onClick={onClick}
    to={to}
  >
    {name}
  </NavLink>
);
export default Button;
