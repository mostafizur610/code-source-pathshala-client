import React from 'react';
import { Card } from 'react-bootstrap';
import image from '../../assets/home.jpg'
import './Home.css'

const Home = () => {
    return (
        <div>
            <Card className="bg-dark text-warning header m-5">
                <Card.Img src={image} className='image-home' alt="" />
                <Card.ImgOverlay className='mt-5'>
                    <Card.Title className='text-center mt-5'><h2>Learn with a Proven Curriculum to become
                        100% Coding Interview Ready</h2></Card.Title>
                    <Card.Text className='text-center mt-4'>
                        <h5>With this course, we promise that you won’t need to look anywhere else!</h5>
                    </Card.Text>
                </Card.ImgOverlay>
            </Card>
        </div>

    );
};

export default Home;