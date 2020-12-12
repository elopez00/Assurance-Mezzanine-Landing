import logo from './../../logo.svg';
import Header from '../static/Header';
import Home from '../home/Home';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';

function App() {
  return (
    <Router>
      <Header/>
      <Route exact path="/">
        <Home />
      </Route>
    </Router>
  );
}

export default App;
