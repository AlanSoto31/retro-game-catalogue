import React from 'react';
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';

const Navbar = () => (
  <Nav className="navbar navbar-light bg-light flex justify-content-between">
    <h1>Retro Game</h1>
    <Link className="navbar-brand" to="/">Home </Link>
  </Nav>
);

export default Navbar;
