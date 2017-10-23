import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import './App.css';
import Store from './Store.js';
import About from './About.js';
import pillowBackdrop from './images/bgd_pillow.jpg';
import cartIcon from './images/shopping-cart.svg';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      page: 0,
    };
  }


  render() {
    return (
      <Router>
        <div className="App">
          <img src={pillowBackdrop} className="App-largePillowImage" alt="stitch pillow" />
          <div className = "App-background" />
          <div className = "App-content">
            <div className = "App-navMenu">
              <div className = {"App-navMenu-button" + (this.state.page === 0 ? " active" : "")} onClick={this.navToShopPage.bind(this)}>Shop</div>
              <div className = {"App-navMenu-button" + (this.state.page === 1 ? " active" : "")} onClick={(ev) => this.setState({page: 1})} >About</div>
              <div className = "App-navMenu-button"><img src={cartIcon} className="App-cartIcon" alt="shopping cart" />0</div>
            </div>
            <header className="App-header">
              <h1 className="App-title">Flip Stitch Pillow</h1>
              <p className="App-intro">
                Tired of dull pillows? We specialize in custom decorative throw pillows.
                Couch pillows, bed pillow made in cute animal shapes. You can even customized your own pillow!
              </p>
            </header>

            <Route exact path="/" component={Store}/>
            <Route path="/about" component={About}/>

          </div>
        </div>
      </Router>
    );
  }
}

export default App;
