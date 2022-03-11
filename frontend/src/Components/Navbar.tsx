import React from "react";
import { Navbar, Container, Nav, Form, FormControl, Button } from "react-bootstrap";
import { Link } from "react-router-dom";




export const Navigation: React.FC = () => {



    return (
        <div>
            <Navbar bg="transparend" variant="dark">
                <Container>
                    <Navbar.Brand>Vinyl Alliance</Navbar.Brand>
                    <Nav className="me-auto" >
                        <Nav.Link as={Link} to="/home">Главная страница</Nav.Link>
                        <Nav.Link as={Link} to="/news">Новости</Nav.Link>
                    </Nav>
                    <Form className="d-flex">
                        <FormControl
                            type="search"
                            placeholder="Поиск"
                            className="me-2"
                            aria-label="Search"
                            style={{ borderRadius: 8 }}
                        />
                    </Form>
                    <Nav.Link as={Link} to="/login">
                    <Button variant="outline-light" style={{ borderRadius: 8 }}>Профиль</Button>
                    </Nav.Link>
                </Container>
            </Navbar>
        </div>
    );
};
