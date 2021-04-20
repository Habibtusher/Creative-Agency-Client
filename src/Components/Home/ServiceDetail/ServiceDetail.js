import React from 'react';
import { Card,Button } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import './ServiceDetail.css'
const ServiceDetail = ({ service }) => {
const history = useHistory();
    const handleOrder= (id) => {
        history.push(`/order/${id}`);
    }
    return (
        
        
            <Card id="cardStyle" className="col-md-4 mb-5"  >
            <Card.Img variant="top" src={service.imageURL} style={{width: '50%', height: '150px',display: "block", margin: "auto" }} />
            <Card.Body>
                <Card.Title className="text-center">{service.name}</Card.Title>
                <Card.Text style={{height: "150px"}} className="text-center">
                    <p style={{textAlign: "justify"}} className="text-secondary"> {service.description}</p>
                 
                </Card.Text>
                <div className="text-center">
                <Button onClick={() =>handleOrder(service._id)} variant="primary">Get Service</Button>
                </div>
               
            </Card.Body>

        </Card>
      
       


        //    <img style={{height: '250px'}} src={service.imageURL}/>
        //      <h4 className="mt-3">{service.name}</h4>
        //      <p className="mt-3 align-justify"> {service.description}</p>
    
    );
};

export default ServiceDetail;