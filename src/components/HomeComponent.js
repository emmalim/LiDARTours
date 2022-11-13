import React from 'react';
import {Link} from 'react-router-dom';

import {
    Container,
    Row,
    Col,
    Button
} from 'reactstrap';

function Home(props) {
  return (

   <Container>
      <Row>
        <Col sm="6" md="3"><h1 className="header">LiDARTour</h1></Col>
      </Row>

      <Row>
        <Col sm="12" md="12"><h4 className="text">Take a Tour From the Comfort of Your Home</h4></Col>
      </Row>

      <Row>
          <Col sm="6" md="3"><Link to ="/demo"><Button className="button" color="primary">Learn more</Button></Link></Col>
      </Row>

      <Row>
          <Col className="house-col" sm="5"><img className="house-col" src='assets/house.png' alt='house' /></Col>
      </Row>
   </Container>
  );
}

export default Home;
