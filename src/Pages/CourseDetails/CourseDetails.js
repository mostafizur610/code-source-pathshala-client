import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import LeftSideNav from '../../Shared/LeftSideNav/LeftSideNav';
import Categories from '../Categories/Categories';


const CourseDetails = () => {
    const courseDetails = useLoaderData();

    return (
        <div >
            <Container>
                <Row>
                    <Col lg='2'>
                        <LeftSideNav></LeftSideNav>
                    </Col>

                    <Col lg='10'>
                        <div className='mx-5'>
                            <Categories courseDetails={courseDetails}></Categories>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default CourseDetails;