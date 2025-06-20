import React, { useState } from 'react';

import {
  Container,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Button
} from 'reactstrap';

import { useAuth0 } from '@auth0/auth0-react';
import logo from '../assets/logo.jpg';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, isAuthenticated, loginWithRedirect, logout } = useAuth0();
  const toggle = () => setIsOpen(!isOpen);

  const logoutWithRedirect = () => {
    const redirectUri = window.location.origin + window.location.pathname;
    return logout({
      logoutParams: {
        returnTo: redirectUri
      }
    });
  };

  return (
    <div className="nav-container">
      <Navbar color="light" light expand="md" container={false}>
        <Container>
          <NavbarBrand>
            <img src={logo} alt="logo" style={{ height: '38px', width: 'auto' }} />
          </NavbarBrand>
          
        
          <NavbarToggler onClick={toggle} />
          {isAuthenticated && (
          <Button
            id="qsLoginBtn"
            color="danger"
            outline
            onClick={() => logoutWithRedirect({})}
            >
              Log out
            </Button>
          )}
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
