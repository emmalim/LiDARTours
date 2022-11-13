import React, { Component } from 'react';
import {
    Container,
    Row,
    Col,
    Button,
    Card,
    CardBody,
    CardImg,
    CardText,
    CardTitle,
} from 'reactstrap';

function Process(props) {
    return (
        <Container>

            <Row>
                <Col sm="6" md="12"><h1 className="subhead">Making LiDARTours</h1></Col>
            </Row>
            <Row>
                <Card className="card">
                    <CardImg width="25%" src="assets/scanning2.png" />
                    <CardBody>
                        <CardTitle><h3>Phase 1: Scanning + Sketchfab</h3></CardTitle>
                            <CardText>
                            3D scans were made of the room using the Polycam app. Our team was 
                            impressed by the quality of the scans and how detailed some of the smaller 
                            objects in the room appeared. Our first scan showed an abundance of imperfections, 
                            including distorted objects, blurred areas and duplicated objects.  
                            The second scan was done at a much slower pace than the first scan to get 
                            as much detail as possible, but there are still imperfections that can be seen in our demo video. 
                            </CardText>
                    </CardBody> 
                </Card>
                
                <Card>
                    <CardImg left width="50%" src="assets/testing.png" />
                    <CardBody>
                        <CardTitle><h3>Phase 2: Upload to Blender and issues implementing in VR</h3></CardTitle>
                            <CardText>
                            Once the scan was uploaded to Sketchfab, we downloaded the model and imported it 
                            into Blender to make small edits. Our original plan was to then import the Blender 
                            model into Unity as an asset and then teleport around/interact with small 
                            objects in the room. However, the model was importing without the colors and texture. 
                            Without any sufficient online documentation regarding 3D scans, we were not able to 
                            resolve this issue. Luckily, Blender has a VR feature so we ultimately decided to implement 
                            our project with that rather than Unity and SteamVR. Unfortunately, this means 
                            that we aren’t able to include some extra functionality, such as pop-up texts 
                            and interactable objects, into our project as we had hoped.
                            </CardText>
                    </CardBody>
                </Card>
                <Card>
                    <CardImg left width="50%" src="assets/smoothing.png" />
                    <CardBody>
                        <CardTitle><h3>Phase 3: Cleaning up in Blender</h3></CardTitle>
                            <CardText>
                            After figuring out how to implement our project in VR, we tried to clean up our 
                            3D model to fix some of the blatant imperfections. As our team is unfamiliar with 
                            how to navigate Blender, smoothing out some of the areas that were rendered with 
                            less detail proved to be a challenge. Most of the major imperfections were fixed, 
                            though part of the ceiling, the side of the desk, and the chair are lacking in 
                            quality compared to the rest of the room. With more time and with a deeper 
                            understanding of how Blender works, it would be better to have the model as 
                            clean as possible to make the environment as realistic as possible.
                            </CardText>
                    </CardBody>
                </Card>
            
            </Row>
            
        </Container>
    );
}
export default Process;