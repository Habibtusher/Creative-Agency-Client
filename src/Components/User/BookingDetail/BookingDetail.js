import React from 'react';
import { Card } from 'react-bootstrap';

const BookingDetail = ({book}) => {
    console.log(book);
    return (
        <Card id="cardStyle" className="col-md-4"  >
            <Card.Img variant="top" src={book.photo} style={{width: '30%', height: '100px',display: "block", margin: "auto" }} />
            <Card.Body>
                <Card.Title className="text-center">{book.serviceName}</Card.Title>
                <Card.Text style={{height: "200px"}} className="text-center">
                    <p style={{textAlign: "justify"}} className="text-secondary"> {book.serviceDetail}</p> 
                </Card.Text>
            </Card.Body>

        </Card>
    );
};

export default BookingDetail;