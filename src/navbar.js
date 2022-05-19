import React from 'react'
import { Nav,NavDropdown,Navbar,Container } from 'react-bootstrap'



function navbar() {
    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">Welcome to our website</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#link">About</Nav.Link>
                            <NavDropdown title="Our products" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Shoes</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Accesories</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Swimsuits</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Contact us</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div>
    )
}

export default navbar