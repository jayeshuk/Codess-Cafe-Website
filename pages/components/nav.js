import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';


const myNav = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="dark" dark expand="md" fixed="top" className="navbar py-3 py-lg-4">
        <NavbarBrand className="ms-4" href="/">Codess Cafe</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar >
          <Nav className="ms-auto" navbar>
            <NavItem>
              <NavLink href="/">About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/">Tracks</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/">Mentors</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/">Testimonials</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/">Apply</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/">Contact Us</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default myNav;
