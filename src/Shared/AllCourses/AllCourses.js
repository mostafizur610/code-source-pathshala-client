import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const AllCourses = ({ courses }) => {
    const { title, img, details } = courses;
    return (
        <div>
            <Card style={{ width: '18rem' }} className='mb-5'>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {
                            details.length > 50 ? <p>{details.slice(0, 50) + '...'}</p> : <p>{details}</p>
                        }
                    </Card.Text>
                    <Link to={`/courses/${courses.id}`}><Button variant="primary">Show details</Button></Link>
                </Card.Body>
            </Card>
        </div>
    );
};

export default AllCourses;