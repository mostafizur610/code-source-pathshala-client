import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import LeftSideNav from '../../Shared/LeftSideNav/LeftSideNav';




const Courses = () => {
    return (
        <div>
            <Container>
                <Row>
                    <Col lg='2'>
                        <LeftSideNav></LeftSideNav>
                    </Col>
                    <Col lg='10'>
                        <h3>All courses</h3>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Courses;