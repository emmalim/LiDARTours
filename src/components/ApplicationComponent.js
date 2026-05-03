import React, { Component } from 'react';
import {
    Container,
    Row,
    Col,
    Button
} from 'reactstrap';

function Application(props) {
    return(
        <Container>
    <Row>
      <Col sm="6" md="12"><h1 className="subhead">LiDARTours Applied</h1></Col>
    </Row>

    
    <Row>
        <Col sm="12" md="12"><h2 className="appText"> As new mobile phones are now equipped with lidar scanners, this opens the door for anyone to create 3D renders. </h2> </Col>
    </Row>
    <Row className="application">
        <Col sm="6" md ="6"><img className="plane" src={process.env.PUBLIC_URL + '/assets/lidarscan.png'}/></Col>
        <Col sm="6" md="6"><h2 className="appText2"> This technology has several applications from showing off dorm rooms for students to
        virtual open houses for real estate. With Covid-19 impacting everyone the past few years, we saw that in-person tours may not always 
        be available for people that need housing for school, travel, or more. LiDARTours looks to solve this problem so life can go on. Our goal  
        is to create a robust 3D scale modeled VR experience that will allow people to view where they may be heading next.
        </h2> </Col>
    </Row>
    <Row className="application">
    <Col sm="6" md="6"><h2 className="appText2"> The 3D render we created of the dorm room is shown on the right. The extremely high
        detail was very impressive, especially for being done on an iPhone. This enables much to be done within the real estate world,
        hotels, college tours, and even Airbnbs. Nobody enjoys the feeling of uncertainty, and now the technology exists for anyone
        to create a 3D render.
        </h2> </Col>
        <Col sm="6" md ="6"><img className="render" src={process.env.PUBLIC_URL + '/assets/render.png'}/></Col>
    </Row>
    </Container>
    )
}
export default Application;