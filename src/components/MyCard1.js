import React, { Component } from 'react';
import { Card, CardImg,  Col } from 'reactstrap';


class MyCard1 extends Component {
    render() {
        return (
            
                <Col className="mt-5" sm="6">
                    <Card>
                        <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" />
                    </Card>
                </Col> 
        );
    }
}

export default MyCard1;