import React from "react";
import './style.css';
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";

function NavbarC() {

    return (
        <>
            <Navbar collapseOnSelect expand="lg" className="bg-navbar" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand href="#bodymain">React</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#featuresC">Features</Nav.Link>
                            <Nav.Link href="#worksC">Works</Nav.Link>
                            <Nav.Link href="#contactC">Contact</Nav.Link>
                            <NavDropdown title="Dropdown" id="collapsible-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">
                                    Another action
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">
                                    Separated link
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Nav>
                            <Nav.Link href="#deets">More deets</Nav.Link>
                            <Nav.Link eventKey={2} href="#memes">
                                Dank memes
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default NavbarC;