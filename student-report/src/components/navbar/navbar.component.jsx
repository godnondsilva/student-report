import React from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.css';
import { Nav, NavItem, NavLink } from 'reactstrap';

const Navbar = () => (
    <div>
        <Nav>
        <NavItem>
            <NavLink href="/">Home</NavLink>
        </NavItem>
        <NavItem>
            <NavLink href="/user">Reports</NavLink>
        </NavItem>
        </Nav>
    </div>
)

export default Navbar;