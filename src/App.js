import React from 'react';
import { BrowserRouter as Router , Switch, Route, Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/style.css';
import AppNavBar from './components/AppNavBar';
import TopNav from './components/TopNav'; 
import Footer from './components/Footer'; 



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
    <div>
      <h2>Home</h2>
    </div>
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
 