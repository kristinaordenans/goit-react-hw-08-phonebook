import { Link, Container } from './AuthNav.styled';

// import { NavLink } from "react-router-dom";

export const AuthNav = () => {
  return (
    <Container>
      <Link to="/register">Register</Link>
      <Link to="/login">Log In</Link>
    </Container>
  );
};