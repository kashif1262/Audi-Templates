import React, { Component } from 'react'; 
import { 
    Container,
    Row,
    Button
} from 'reactstrap';

class BannerText extends Component {
    render() {
        return (
            <Container className=" my-5">
                <Row className="my-auto justify-content-center">
                    <p>
                        Bayern Munich’s vehicle fleet is going electric. The legendary soccer club and its partner Audi announced the move in a tongue-in-cheek video about “transfer rumors”.
                    </p>
                </Row>
                <Row className="my-auto justify-content-center">
                    <Button>
                        Read more
                    </Button>
                </Row> 
                <Row className="my-auto justify-content-center">
                    <h1>
                        The world of Audi
                    </h1>
                    <p>
                        Discover Audi as a brand, company and employer on our international website. Here you will find information about models and technologies. Inspiring content, interesting backgrounds and fascinating moments – digital, individual and authentic. Experience our vision of mobility and let yourself be inspired.
                    </p>
                </Row>
            </Container>
        );
    }
}

export default BannerText;