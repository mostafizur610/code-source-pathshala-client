import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { FaGithub, FaGoogle } from "react-icons/fa";
import { Col, Row } from 'react-bootstrap';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";
import { Link, useNavigate } from 'react-router-dom';



const Login = () => {
    const [error, setError] = useState('');
    const { providerLogin } = useContext(AuthContext);
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const { signIn } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleGoogleSignIn = () => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => console.error(error));
    }

    const handleGithubSignIn = () => {
        providerLogin(githubProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => console.error(error));

    }

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(email, password);

        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
                setError('');
                navigate('/login');
            })
            .catch(error => {
                console.error(error)
                setError(error.message);
            });

    }

    return (
        <div className='border m-5 p-5 shadow p-3 rounded bg-light'>
            <h2 className='text-center py-2 text-white mb-5 border bg-success rounded'>Login Form</h2>
            <Form onSubmit={handleSubmit} >
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="password" placeholder="Password" required />
                </Form.Group>

                <div className='d-grid'>
                    <Row>
                        <Col>
                            <Button className='rounded m-2' variant="primary" type="submit">
                                Login
                            </Button>
                            <Button onClick={handleGoogleSignIn} className='rounded m-2' variant="outline-secondary"><FaGoogle /> Login with Google</Button>
                            <Button onClick={handleGithubSignIn} className='rounded m-2' variant="outline-dark"><FaGithub /> Login with Github</Button>
                            <Form.Text className="text-warning">
                                {error}
                            </Form.Text>
                        </Col>
                    </Row>
                </div>
                <Form.Text className="text-danger ms-2">
                    New user? Go to <Link to='/register'>Registration</Link>
                </Form.Text>
            </Form>
        </div>
    );
};

export default Login;