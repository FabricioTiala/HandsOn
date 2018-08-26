import React, { Component } from 'react'
import { 
        BrowserRouter as Router,
        Route, Link 
      } from 'react-router-dom'         

import logo from './logo.svg'
import './App.css';
import Home from './Home'
import Sobre from './Sobre'

class App extends Component {

  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Fabrício Ferreira da Silva</h1>
          </header>

          <p className="App-intro">
          <p>
              <Link to ='/'> Home </Link> &nbsp;
              <Link to ='/sobre'> Sobre </Link> &nbsp;
              <Link to = '/contato'> Contato </Link> &nbsp;
              <Link to = '/curriculum'> Curriculo </Link>
         </p> 
            <Route path='/' exact component={Home} />
            <Route path='/sobre' component={Sobre}/>

          </p>
        </div>
      </Router>
    );
  }
}

export default App;
