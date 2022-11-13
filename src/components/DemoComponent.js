import React, { Component } from 'react';
import {
    Container,
    Row,
    Col,
    Button
} from 'reactstrap';

function Demo(props) {
  return (
      <Container>
        <Row>
          <Col sm="6" md="12"><h1 className="subhead">How it works</h1></Col>
        </Row>
        <Row>
        <iframe
      width="853"
      height="480"
      src={`https://www.youtube.com/embed/i4gAn7CB7sE`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
    <Row> 
      <p>To create a 3D scan, we used Lidar technology, which uses lasers to calculate distance 
        from the scanner to the object being scanned. Using VR, we placed users inside the 
        resulting scan, allowing them to view the room as if they are actually there.<br></br>
        While the Lidar scan was able to accurately capture most of the room, we noticed some 
        faults in the technology. The scanner had difficulty accurately rendering reflective 
        surfaces like mirrors, computer monitors, and windows, which resulted in blurred, 
        distorted, and missing objects. Many of the small objects present in the scene also 
        came out distorted. Some examples seen in the demo include coffee mugs, books, and 
        lamps. Because Lidar is reliant on reflected light to scan objects, we found that 
        areas hidden in shadows were also lacking in detail and clarity. Despite our issues 
        with some objects lacking in quality compared to the rest of the scan, the main details 
        are comprehensible enough that users are able to get a full experience.
        </p>
    </Row> 
        </Row>
      </Container>
  )
  
}
export default Demo;