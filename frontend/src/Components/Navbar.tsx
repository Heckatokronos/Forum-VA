import React from "react";

import { NavbarBrand, Navbar, Container, Nav, Form, FormControl, Button } from "react-bootstrap";

const NavbarShowcase: React.FC = () => (
    <>
        <Navbar bg="transparent">
            <Container>
                <Navbar.Brand href="#home">
                    Vinyl Alliance</Navbar.Brand>
                <Nav className="me-auto" >
                    <Nav.Link href="#home">Главная страница</Nav.Link>
                    <Nav.Link href="#news">Новости</Nav.Link>
                </Nav>
                <Form className="d-flex">
                    <FormControl
                        type="search"
                        placeholder="Search"
                        className="me-2"
                        aria-label="Search"
                    />
                    <Button variant="outline-success">Search</Button>
                </Form>
            </Container>
        </Navbar>
        <br />
    </>
);

export default NavbarShowcase;