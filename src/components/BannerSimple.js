// @flow
import  React from 'react';
import { Card, CardImg,   Button, Col,Container, Row } from 'reactstrap'; 
import AppCardImg from '../img/app-card.jpg';
export default function BannerSimple(props) {
  return (
    <div className = "my-5" style={{backgroundImage:`url(${props.url})`,backgroundColor:props.color}}>
    <Container >
        <Row>
        <Col className="my-5" sm="6">
            <Card>
                <CardImg top width="100%" src={AppCardImg} alt="Card image cap" />
                
            </Card>
        </Col>
        <Col className="my-5 d-flex  " sm="6" color = "white"> 
            <div className="align-items-center my-5">
                    <h1 className="animate__animated animate__slideInDown">title</h1>
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