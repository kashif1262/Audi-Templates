import React, { Component } from 'react';
import { Container } from 'reactstrap';

class Footer extends Component {


    render() {
        return (
            <div className='col'>
                <Container>
                    <p className="m-3">  
                    © AUDI AG. All rights reserved
                    </p>
                </Container>
            </div>
        );
    }
}

export default Footer;