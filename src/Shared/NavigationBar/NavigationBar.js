import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import image1 from '../../assets/image1.png'
import './NavigationBar.css'

const NavigationBar = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand><img className='image' src={image1} alt='' /></Navbar.Brand>
                <Navbar.Brand><Link className="me-5 fs-3 text-white text-decoration-none" to='/'>Code-Source Pathshala</Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link ><Link className="me-4 text-info text-decoration-none" to='/'>Home</Link></Nav.Link>
                        <Nav.Link ><Link className="me-4 text-info text-decoration-none" to='/courses'>Courses</Link></Nav.Link>
                        <Nav.Link ><Link className="me-4 text-info text-decoration-none" to='/faq'>FAQ</Link></Nav.Link>
                        <Nav.Link ><Link className="me-4 text-info text-decoration-none" to='/blog'>Blog</Link></Nav.Link>
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
    );
};

export default NavigationBar;