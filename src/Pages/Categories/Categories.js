import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FaDownload } from 'react-icons/fa';
import { Link } from 'react-router-dom';
// import PDFFile from './PDFFile';
// import PDFDownloadLink from '@react-pdf/renderer';



const Categories = ({ courseDetails }) => {
    const { header_img, title, details, rating } = courseDetails;
    return (
        <div>

            <Card className="text-center">
                <Card.Header>
                    <div className='d-flex justify-content-around'>
                        <h2 className='text-success text-center mb-2'>Details about {title}</h2>
                        <Link><FaDownload /></Link>

                        {/* <PDFDownloadLink document={<PDFFile></PDFFile>} fileName="Form">
                            <button>abc</button>
                        </PDFDownloadLink>
                        <PDFFile></PDFFile> */}
                    </div>
                    <Card.Img src={header_img} />
                </Card.Header>
                <Card.Body>
                    <Card.Text>
                        {details}
                    </Card.Text>
                    <Link to='/checkout'><Button variant="primary">Get Premium Access</Button></Link>

                </Card.Body>
                <Card.Footer className="text-muted">rating: {rating}</Card.Footer>
            </Card>
        </div>
    );
};

export default Categories;