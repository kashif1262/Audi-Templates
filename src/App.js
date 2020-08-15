import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/style.css';
import 'animate.css';
import AppNavBar from './components/AppNavBar';
import TopNav from './components/TopNav';
import Footer from './components/Footer';
import Banner1 from './components/Banner1';
import BannerText from './components/BannerText';
import AppCard from './components/AppCard';
import { Container, Row, Col } from 'reactstrap';
import BannerSimple from './components/BannerSimple';
import ImageView from './components/ImageView';
import img from './img/banner-img.jpg';
function App() {
  return (
    <div className="App">
      <Router>
        <TopNav />
        <AppNavBar />

        <Switch>
          <Route exact path="/" >
            <Home />
          </Route>

          <Route path="/audi" >
            <Audi />
          </Route>
          <Route path="/company" >
            <Company />
          </Route>
          <Route path="/careers" >
            <Careers />
          </Route>

        </Switch>

      </Router>
      <Footer />
    </div>
  );
}

export default App;


function Home() {
  return (
    <React.Fragment>
      <Banner1 />
      <BannerText />
      <Container>
        <Row>
          <Col className="mt-5" sm="6">
            <AppCard /> 
          </Col>
          <Col className="mt-5" sm="6">
            <AppCard /> 
          </Col>
        </Row>
        <Row>
          <Col className="mt-5" sm="6">
            <AppCard /> 
          </Col>
          <Col className="mt-5" sm="6">
            <AppCard /> 
          </Col>
        </Row>
      </Container>
      <BannerSimple url={img}  />
      <Container>
        <Row>
          <Col className="mt-5" sm="4">
            <AppCard /> 
          </Col>
         
          <Col className="mt-5" sm="4">
            <AppCard /> 
          </Col>
         
          <Col className="mt-5" sm="4">
            <AppCard /> 
          </Col>
        </Row>
      </Container>
      <BannerSimple color="blue" />
      
      <Container>
        <Row>
          <Col className="pr-sm-0" sm="6">
          <ImageView /> 
          </Col>
          <Col className="pl-sm-0" sm="6">
          <ImageView /> 
          </Col>
        </Row>
        <Row>
          <Col className="pr-sm-0" sm="6">
          <ImageView /> 
          </Col>
          <Col className="pl-sm-0" sm="6">
            <ImageView /> 
          </Col>
        </Row>
      </Container>


    </React.Fragment>
  );
}

function Audi() {
  return (
    <div>
      <h2>Audi</h2>
    </div>
  );
}

function Careers() {
  return (
    <div>
      <h2>careers</h2>
    </div>
  );
}
function Company() {
  return (
    <div>
      <h2>company</h2>
    </div>
  );
}
