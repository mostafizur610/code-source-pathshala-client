import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import image1 from '../../assets/image1.png'
import './NavigationBar.css'

const NavigationBar = () => {
    return (
        <Navbar className='mb-5' collapseOnSelect expand="lg" bg="dark" variant="dark" sticky='top'>
            <Container>
                <Navbar.Brand><img className='image' src={image1} alt='' /></Navbar.Brand>
                <Navbar.Brand><Link className="me-5 fs-3 text-white text-decoration-none" to='/'>Code-Source Pathshala</Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link ><Link className="me-4 text-white text-decoration-none" to='/'>Home</Link></Nav.Link>
                        <Nav.Link ><Link className="me-4 text-white text-decoration-none" to='/courses'>Courses</Link></Nav.Link>
                        <Nav.Link ><Link className="me-4 text-white text-decoration-none" to='/faq'>FAQ</Link></Nav.Link>
                        <Nav.Link ><Link className="me-4 text-white text-decoration-none" to='/blog'>Blog</Link></Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link><Link className="me-4 text-white text-decoration-none" to='/register'>Register</Link></Nav.Link>
                        <Nav.Link><Link className="me-4 text-white text-decoration-none" to='/login'>Login</Link>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavigationBar;