import React from 'react';
import { Card, CardImg} from 'reactstrap';
import AppCardImg from '../img/app-card.jpg';

function ImageView() {

    return (
        <Card >
            <CardImg top width="100%" src={AppCardImg} alt="Card image cap" /> 
        </Card>
    );

}

export default ImageView;