import React from "react";
import './style.css';
import { Navbar, Container, Dropdown } from "react-bootstrap";
import { MdOutlineArrowBackIosNew } from 'react-icons/md';
import { CiMenuKebab } from 'react-icons/ci';

function NavbarC(props) {

    function backToHome() {
        window.location.href = '/';
    }

    return (
        <>
            <Navbar collapseOnSelect expand="lg" className="appinfo-bg-navbar" data-bs-theme="dark">
                <Container>
                    <MdOutlineArrowBackIosNew className="appinfo-navbar-btn-back" onClick={backToHome} />
                    <Navbar.Brand href="#appinfo-main">{props.name}</Navbar.Brand>
                    <Dropdown drop="start">
                        <Dropdown.Toggle className="appinfo-navbar-btn-hide-icon">
                            <CiMenuKebab className="appinfo-navbar-btn-show-icon" />
                        </Dropdown.Toggle>
                        <Dropdown.Menu className="appinfo-navbar-dropdown">
                            <Dropdown.Item className="appinfo-navbar-dropdown-item" href="#appinfo-description">Description</Dropdown.Item>
                            <Dropdown.Item className="appinfo-navbar-dropdown-item" href="#appinfo-features">Features</Dropdown.Item>
                            <Dropdown.Item className="appinfo-navbar-dropdown-item" href="#appinfo-termsandconditions">Terms and Conditions</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </Container>
            </Navbar>
        </>
    )
}
export default NavbarC;