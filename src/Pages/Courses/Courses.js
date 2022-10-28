import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import LeftSideNav from '../../Shared/LeftSideNav/LeftSideNav';
import { useLoaderData } from 'react-router-dom';
import AllCourses from '../../Shared/AllCourses/AllCourses';


const Courses = () => {
    const allCourses = useLoaderData();

    return (
        <div >
            <Container>
                <Row>
                    <Col lg='2'>
                        <LeftSideNav></LeftSideNav>
                    </Col>
                    <Col lg='10'>
                        <h1 className='text-success text-center mb-5'>Our Courses</h1>
                        <div className='d-flex flex-wrap gap-5 ms-5'>
                            {
                                allCourses.map(courses => <AllCourses
                                    key={courses.id}
                                    courses={courses}
                                ></AllCourses>)
                            }
                        </div>
                    </Col>
                </Row>
            </Container>
        </div >
    );
};

export default Courses;