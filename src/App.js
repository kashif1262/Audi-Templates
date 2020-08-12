import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/style.css';
import AppNavBar from './components/AppNavBar';
import TopNav from './components/TopNav';
// import Banner from './components/Banner';
 import Footer from './components/Footer';
// import Card from './components/MyCard';
// import Card1 from './components/MyCard1';
// import { Row, Container, Col } from 'reactstrap';


function App() {
  return (
    <div className="App">
      <div className="container-fluid m-0 p-0 fixed-top">
        <TopNav />
        <AppNavBar />
      </div>
      <div height="500px"></div>
      {/* <Banner />
      <Container>
        <Row>
          <Card />
          <Card />
          <Card /> 
          <Card />
        </Row>
      </Container>
      <Banner />
      <Container>
        <Row>
          <Card1 />
          <Card1 />
          <Card1 /> 
          <Card1 />
        </Row>
      </Container>
      <Banner />
      <Container>
        <Row>
          <Card />
          <Card />
          <Card /> 
          <Card />
        </Row>
      </Container>
      <Banner />
      <Container>
        <Row>
          <Card />
          <Card />
          <Card /> 
          <Card />
        </Row>
      </Container>
      <Banner />
      <Container>
        <Row>
         <Col sm="3">
         </Col>
         <Col sm="3">
         </Col>
         <Col sm="3">
         </Col>
         <Col sm="3">
         </Col>
        </Row>
      </Container>*/}
      
      <Footer />
    </div> 
  );
}

export default App;
