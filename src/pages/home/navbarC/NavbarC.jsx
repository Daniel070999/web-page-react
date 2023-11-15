import React from "react";
import './style.css';
import { Navbar, Nav, Container } from "react-bootstrap";

function NavbarC() {

    return (
        <>
            <Navbar collapseOnSelect expand="lg" className="bg-navbar" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand href="#bodymain">React</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                        <Nav.Link href="#howusC">Who us</Nav.Link>
                            <Nav.Link href="#featuresC">Features</Nav.Link>
                            <Nav.Link href="#worksC">Works</Nav.Link>
                            <Nav.Link href="#contactC">Contact</Nav.Link>
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