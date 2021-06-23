import React from 'react';
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Axo from '../components/Axo';

const Navbar = () => (
  <Nav className="navbar navbar-light bg-light d-flex justify-content-even align-content-center">
    <div className="d-flex justify-content-even align-content-center">
      <Axo />
      <h1 className="main-title px-3">Axo-Retro-Games</h1>
    </div>
    <Link className="navbar-brand" to="/"><p className="nav-home">Home</p></Link>
  </Nav>
);

export default Navbar;
