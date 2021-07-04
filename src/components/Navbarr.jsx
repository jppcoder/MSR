import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'

const Navbarr = () => {
    return (
        <Navbar className="navbar" bg="light" expand="lg" >
            <Navbar.Brand href="#home">
                <img
                    src="/ico/Logo.png"
                    width="64"
                    height="64"
                    className="d-inline-block align-top"
                    alt="msr logo"
                />
             </Navbar.Brand>
            <Navbar.Brand href="#home" className="mr-auto logoText text-success">MOVIMIENTO <br></br>SIONISTA RENOVADOR</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto mt-2">
                    <LinkContainer to="/"><Nav.Link  className="navFont mr-3  text-success  text-center">QUIENES SOMOS</Nav.Link></LinkContainer>
                    <LinkContainer to="/"><Nav.Link className="navFont mr-3 text-success text-center">HANOAR HATZIONI</Nav.Link></LinkContainer>
                    <LinkContainer to="/"><Nav.Link className="navFont mr-3 text-success text-center">TNUOT</Nav.Link></LinkContainer>
                    <LinkContainer to="/"><Nav.Link className="navFont mr-3 text-success text-center">AGENDA COMUNITARIA</Nav.Link></LinkContainer>
                    <LinkContainer to="/"><Nav.Link className="navFont mr-3 text-success text-center">GALERIA</Nav.Link></LinkContainer>
                    <LinkContainer to="/"><Nav.Link className="navFont mr-3  text-success text-center">CURSOS</Nav.Link></LinkContainer>
                    <LinkContainer to="/"><Nav.Link className="navFont mr-3 text-success text-center">CONTACTO</Nav.Link></LinkContainer>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Navbarr
