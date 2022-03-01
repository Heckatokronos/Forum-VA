import React, { Component } from 'react'
import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap'


export function NavbarBrand() {
    return (
        <>
            <Navbar bg="light">
                <Container>
                    <Navbar.Brand href="#home">Brand link</Navbar.Brand>
                </Container>
            </Navbar>
        </>
    )

}


