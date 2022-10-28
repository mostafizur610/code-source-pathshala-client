import React from 'react';
import { Page, Title, Text, Image, Document } from '@react-pdf/renderer';

const PDFFile = ({ courseDetails }) => {
    const { header_img, title, details } = courseDetails;
    return (
        <div>
            <Document>
                <Page >
                    <Title>{title}</Title>
                    <Image src={header_img}></Image>
                    <Text fixed>{details}
                    </Text>
                </Page>
            </Document>
        </div>
    );
};

export default PDFFile;