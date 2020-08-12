
import { Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem, NavLink, Container } from 'reactstrap';
import React, { Component } from 'react';
import logo from  '../Audi.png';
import { Search,CalendarDay } from 'react-bootstrap-icons';
class AppNavBar extends Component {

    state = {
        isOpen: false
    }

    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }


    render() {
        return (
            <div   >
                <Navbar  color="light" light expand="" >
                    <Container> 
                        <NavbarToggler   onClick={this.toggle} />     
                        <NavbarBrand href="/" ><img src={logo} width="40px" alt="Audi" /> </NavbarBrand>
                        <Nav className="py-3" navbar>
                                <NavItem>
                                    <NavLink  href="/"><Search /></NavLink>
                                </NavItem>
                                <p className="m-0 flag" >|</p>
                                <NavItem> 
                                    <NavLink href="/"><CalendarDay /></NavLink>
                                </NavItem>
                            </Nav>
                        
                        <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav className="py-3" navbar>
                                <NavItem>
                                    <NavLink className="pr-3" href="/">first item</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="http://google.com">sceond link</NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </Container>
                </Navbar>
            </div>
        );
    }
}

export default AppNavBar;