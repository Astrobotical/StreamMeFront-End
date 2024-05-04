import React from 'react';
import { Navbar, Nav,Container } from 'react-bootstrap';
import {NavigationBarProps} from './Models/navigationsProps';

const NavigationBar: React.FC<NavigationBarProps> = ({isSignedIn,username}) => {
    return (
        <Navbar className='bg-body-tertiary' expand="lg">
            <Container>
            <Navbar.Brand href="#home">StreamMe</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="justify-content-end">
                <Nav className="justify-content-end">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#about">About</Nav.Link>
                    <Nav.Link href="#services">Services</Nav.Link>
                    {
                        isSignedIn ? (
                            <>
                                <Nav.Link href="#profile">{username}</Nav.Link>
                                <Nav.Link href="#signout">Sign Out</Nav.Link>
                            </>
                        ) : (
                            <>
                                <Nav.Link href="#signin">Sign In</Nav.Link>
                                <Nav.Link href="#signup">Sign Up</Nav.Link>
                            </>
                        ) 
                    }
                </Nav>
            </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavigationBar;