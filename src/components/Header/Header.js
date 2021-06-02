import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import logo from '../../assets/logo.png'

function Header({ handleSelect }) {

    return (
        <Container as="header" className="px-0 mb-2" fluid>
            <Navbar bg="light" className="px-4" variant="light" expand="lg">
                <Navbar.Brand href="#">
                    <img
                        alt="knowledge logo"
                        src={logo}
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />{' '}
                    Classroom
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link onClick={(e) => handleSelect(e)}>Add Student</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </Container>
    )
}

export default Header;