import React from 'react';
import { Card, Col } from 'react-bootstrap';

const AllSoftware = ({soft}) => {

    const {img,name,description}=soft;
    return (
        <>
        <Col>
      <Card style={{height:'250px'}} className='justify-content-center align-items-center border-0 shadow p-3 mb-5 bg-body rounded'>
        <Card.Img variant="top" style={{width:'100px',height:'100px',marginTop:'-50px'}} src={soft.img} />
        <Card.Body>
          <Card.Title>{soft.name}</Card.Title>
          <Card.Text>
            This is a longer card with supporting text below as a natural
            lead-in to additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
     

            
        </>
    );
};

export default AllSoftware;