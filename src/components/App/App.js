import Header from '../static/Header';
import Footer from '../static/Footer';

import Home from '../home/Home';
import Portfolio from '../portfolio/Portfolio'
import Criteria from '../criteria/Criteria'
import Team from '../team/Team'

import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';

function App() {
  return (
    <Router>
      <Header/>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/portfolio">
        <Portfolio/>
      </Route>
      <Route exact path="/investment-criteria">
        <Criteria />
      </Route>
      <Route exact path="/team">
        <Team />
      </Route>
      <Footer />
    </Router>
  );
}

export default App;
