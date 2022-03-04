import React from "react";
import { Navbar, Container, Nav, Form, FormControl, Button } from "react-bootstrap";
import Login from "../Pages/Login";

const Navigation: React.FC = () => {



    return (
        <Navbar bg="transparend" variant="dark">
            <Container>
                <Navbar.Brand href="#home">
                    Vinyl Alliance</Navbar.Brand>
                <Nav className="me-auto" >
                    <Nav.Link href="#home">Главная страница</Nav.Link>
                    <Nav.Link href="/news">Новости</Nav.Link>
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
                <Button variant="outline-light" style={{ borderRadius: 8 }} href="/pages/Login">Профиль</Button>
            </Container>
        </Navbar>
    );
};

export default Navigation;