// @flow
import  React from 'react';
import { Card, CardImg,   Button, Col,Container, Row } from 'reactstrap'; 
import AppCardImg from '../img/app-card.jpg';
export default function BannerSimple( ) {
    const mystyle = { 
        backgroundColor: "DodgerBlue"
      };

  return (
    <div className = "bg my-5" style={mystyle}>
    <Container >
        <Row>
        <Col className="my-5" sm="6">
            <Card>
                <CardImg top width="100%" src={AppCardImg} alt="Card image cap" />
                
            </Card>
        </Col>
        <Col className="my-5 d-flex  " sm="6"> 
            <div className="align-items-center my-5">
                    <h1>title</h1>
                    <h2> subtitle</h2>
                    <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <Button>Button</Button>
            </div>
        </Col>
        </Row>
    </Container>
    </div>
  );
};