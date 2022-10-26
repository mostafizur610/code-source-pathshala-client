import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { FaGithub, FaGoogle } from "react-icons/fa";
import { Col, Row } from 'react-bootstrap';

const Login = () => {
    return (
        <div className='border m-5 p-5 shadow p-3 rounded bg-light'>
            <h2 className='text-center py-2 text-white mb-5 border bg-success rounded'>Login Form</h2>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="password" placeholder="Password" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>

                <div className='d-grid'>
                    <Row>
                        <Col>
                            <Button className='rounded m-2' variant="primary" type="submit">
                                Login
                            </Button>
                            <Button className='rounded m-2' variant="outline-secondary"><FaGoogle /> Login with Google</Button>
                            <Button className='rounded m-2' variant="outline-dark"><FaGithub /> Login with Github</Button>
                        </Col>
                    </Row>
                </div>
            </Form>
        </div>
    );
};

export default Login;