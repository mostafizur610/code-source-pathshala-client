import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Button, Col, Container, ListGroup, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import LeftSideNav from '../../Shared/LeftSideNav/LeftSideNav';


const CheckOut = () => {

    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch('https://code-source-pathshala-server.vercel.app/categories')
            .then(res => res.json())
            .then(data => setCourses(data));
    }, [])

    return (
        <div >
            <Container>
                <Row>
                    <Col lg='2'>
                        <LeftSideNav></LeftSideNav>
                    </Col>

                    <Col lg='10'>
                        <div className='border p-4 bg-success text-white'>

                            <ListGroup variant="flush">
                                <ListGroup.Item>
                                    {
                                        courses.map(course => <h5 key={course.id}>
                                            <Link className='text-primary' to={`/checkout`}>
                                                <div className='text-center'><Button>{course.name}</Button><Button className='ms-4 bg-info'>99$</Button></div>
                                            </Link>
                                        </h5>)
                                    }
                                </ListGroup.Item>
                            </ListGroup>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default CheckOut;