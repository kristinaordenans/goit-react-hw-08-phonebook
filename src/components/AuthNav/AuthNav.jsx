// import { Link, LinkContainer } from './AuthNav.styled';

import { NavLink } from "react-router-dom";

export const AuthNav = () => {
  return (
    <div>
      <NavLink to="/register">Register</NavLink>
      <NavLink to="/login">Log In</NavLink>
    </div>
  );
};