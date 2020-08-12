
import { Navbar, Nav, NavItem, NavLink, Container } from 'reactstrap';
import React, { Component } from 'react';

class TopNav extends Component {
    render() {
        return (
            <div className=" top-nav"  >
            <Navbar color="dark" dark expand="sm" >
                    <Container>  
                            <Nav className="mr-auto" navbar>
                                <NavItem>
                                    <NavLink color="white" href="/">Press & MediaCenter</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="/">Contact</NavLink>
                                </NavItem>
                            </Nav> 
                            <Nav className="ml-auto" navbar>
                                <NavItem>
                                    <NavLink href="/">DE</NavLink>
                                </NavItem>
                                <p className="m-0 nav-link">|</p>
                                <NavItem>
                                    <NavLink href="/">EN</NavLink>
                                </NavItem>
                            </Nav> 
                    </Container>
                </Navbar>
            </div>
        );
    }
}

export default TopNav;