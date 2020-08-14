import React from 'react';
import { Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText, Button } from 'reactstrap';
import AppCardImg from '../img/app-card.jpg';

function AppCard() {

    return (
        <Card >
            <CardImg top width="100%" src={AppCardImg} alt="Card image cap" />
            <CardBody>
                <CardTitle>title</CardTitle>
                <CardSubtitle> subtitle</CardSubtitle>
                <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                <Button>Button</Button>
            </CardBody>
        </Card>
    );

}

export default AppCard;