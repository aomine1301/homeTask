import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

interface HeaderProps {

}

const Header:React.FC<HeaderProps> = () => (
  <nav>
    <NavLink exact activeClassName="active" to="/">
      Home
    </NavLink>
    <NavLink activeClassName="active" to="/users">
      Users
    </NavLink>
    <NavLink activeClassName="active" to="/contact">
      Contact
    </NavLink>
  </nav>
);

export default Header;
