import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import image1 from '../../assets/image1.png'
import './NavigationBar.css'
import ReactSwitch from 'react-switch';
import { FaMoon, FaSun, FaUser } from "react-icons/fa";
import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import { Button, Image } from 'react-bootstrap';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

const NavigationBar = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogout = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }

    const renderTooltip = (props) => (
        <Tooltip id="button-tooltip" {...props}>
            {user?.displayName}
        </Tooltip>
    );

    return (
        <Navbar className='mb-5' collapseOnSelect expand="lg" bg="dark" variant="dark" sticky='top'>
            <Container>
                <Navbar.Brand><img className='image' src={image1} alt='' /></Navbar.Brand>
                <Navbar.Brand><Link className="me-5 fs-3 text-white text-decoration-none" to='/'>Code-Source Pathshala</Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link ><Link className="me-4 text-white text-decoration-none" to='/'>Home</Link></Nav.Link>
                        <Nav.Link ><Link className="me-4 text-white text-decoration-none" to='/course'>Courses</Link></Nav.Link>
                        <Nav.Link ><Link className="me-4 text-white text-decoration-none" to='/faq'>FAQ</Link></Nav.Link>
                        <Nav.Link ><Link className="me-4 text-white text-decoration-none" to='/blog'>Blog</Link></Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link><Link className="me-4 text-white text-decoration-none">
                            {
                                user?.uid ?
                                    <>
                                        <OverlayTrigger
                                            placement="left"
                                            delay={{ show: 250, hide: 400 }}
                                            overlay={renderTooltip}
                                        >
                                            <span className='me-4'> {user?.photoURL ?
                                                <Image style={{ height: '30px' }} roundedCircle src={user?.photoURL}></Image> : <FaUser></FaUser>
                                            }</span>
                                        </OverlayTrigger>


                                        <Button variant='outline-light' onClick={handleLogout}>Logout</Button>
                                    </>
                                    :
                                    <>
                                        <span className='d-flex mt-4'>
                                            <Nav.Link><Link className="me-4 text-white text-decoration-none" to='/register'>Register</Link></Nav.Link>
                                            <Nav.Link><Link className="me-4 text-white text-decoration-none" to='/login'>Login</Link>
                                            </Nav.Link>
                                        </span>
                                    </>
                            }
                        </Link>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
            {/* <div className="me-5 text-white text-decoration-none"><FaSun /> <ReactSwitch /> <FaMoon /></div> */}
        </Navbar>
    );
};

export default NavigationBar;