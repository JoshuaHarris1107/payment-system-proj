import React from "react";
import { Nav, NavLink, NavMenu } from "./NavbarElements.js";

const Navbar = () => {
    return (
        <>
            <Nav>
                <NavMenu>
                    <NavLink to="src/index.js" activeStyle>Home</NavLink>
                    <NavLink to="src/login.js" activeStyle>Log In</NavLink>
                    <NavLink to="src/register.js" activeStyle>Register Account</NavLink>
                </NavMenu>
            </Nav>
        </>
    );
};

export default Navbar;