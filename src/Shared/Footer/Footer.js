import React from 'react';
import { Card } from 'react-bootstrap';
import img from '../../assets/footer.webp'
import './Footer.css'

const Footer = () => {
    return (
        <>
            <Card className='footer-img'>
                <Card.Img className='img' variant="bottom" src={img} />
            </Card>
        </>
    );
};

export default Footer;