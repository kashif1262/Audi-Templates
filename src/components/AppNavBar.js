
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
    Navbar,
    NavbarBrand,
    NavbarToggler,
    Collapse,
    Nav,
    NavItem,
    NavLink,
    Container
} from 'reactstrap';

import logo from '../Audi.png';
import { Search, CalendarDay } from 'react-bootstrap-icons';

class AppNavBar extends Component {

    state = {
        isOpen: false,
        sceondIsOpen: false
    }

    toggle = () => {
        console.log(this.state.sceondIsOpen);
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    sceondToggle = () => {
        this.setState({
            sceondIsOpen: !this.state.sceondIsOpen
        });

    }
    close = () => {
        this.setState({
            isOpen: false,
            sceondIsOpen: false
        });
    }


    render() {
        return (
            <React.Fragment  >
                <Navbar color="light" light   >
                    <Container>
                        <NavbarToggler onClick={this.toggle} />
                        <NavbarBrand ><Link to="/"><img src={logo} width="40px" alt="Audi" /></Link> </NavbarBrand>
                        <Nav className="py-3" navbar>
                            <NavItem>
                                <NavLink  ><Search /></NavLink>
                            </NavItem>
                            <p className="m-0 flag" >|</p>
                            <NavItem>
                                <NavLink ><CalendarDay /></NavLink>
                            </NavItem>
                        </Nav> 
                        <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav className="py-3" navbar>
                                <NavItem>
                                    <Link onClick={this.sceondToggle} to="/Audi" className="pr-3" >Experience Audi</Link> 
                                    <AppNavBarSceond display="d-lg-none d-md-none d-sm-block container" isOpen={this.state.sceondIsOpen} close={this.close} />
                                </NavItem> 
                                <NavItem>
                                    <Link onClick={this.close} to="/Company" className="pr-3"  >Company</Link>
                                </NavItem>
                                <NavItem>
                                    <Link onClick={this.close} to="/Careers" className="pr-3" >Careers</Link>
                                </NavItem> 
                            </Nav> 
                        </Collapse> 
                        <AppNavBarSceond display="d-none d-md-block d-lg-block p-0"  isOpen={this.state.sceondIsOpen} close={this.close} />
                    </Container>
                </Navbar>
            </React.Fragment>
        );
    }
}

export default AppNavBar;


function AppNavBarSceond(props) {


    return (
         <Container className={props.display}>
            <Collapse  isOpen={props.isOpen} navbar >
                <Nav navbar>
                    <NavItem>
                        <Link onClick={props.close} to="/Company" className="pr-3"  >Company</Link>
                    </NavItem> 
                </Nav>
            </Collapse> 
        </Container>
    );
}
