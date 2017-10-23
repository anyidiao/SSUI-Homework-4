import React, { Component } from 'react';
import Store from './Store.js';
import About from './About.js';
import pillowBackdrop from './images/bgd_pillow.jpg';
import cartIcon from './images/shopping-cart.svg';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 0,
      total_qty: 0,
    };
  }

  navToShopPage() {
    this.setState({page: 0})
  }

  renderPageView() {
    if(this.state.page === 0)
      return <Store/>
    if(this.state.page === 1)
      return <About/>
  }

  render() {
    var total_qty = localStorage.getItem('total') || '0'
    return (
      <div className="App">
        <img src={pillowBackdrop} className="App-largePillowImage" alt="stitch pillow" />
        <div className = "App-background" />
        <div className = "App-content">
          <div className = "App-navMenu">
            <div className = {"App-navMenu-button" + (this.state.page === 0 ? " active" : "")} onClick={this.navToShopPage.bind(this)}>Shop</div>
            <div className = {"App-navMenu-button" + (this.state.page === 1 ? " active" : "")} onClick={(ev) => this.setState({page: 1})} >About</div>
            <div className = "App-navMenu-button"><img src={cartIcon} className="App-cartIcon" alt="shopping cart" />{this.state.total_qty}</div>
          </div>
          <header className="App-header">
            <h1 className="App-title">Flip Stitch Pillow</h1>
            <p className="App-intro">
              Tired of dull pillows? We specialize in custom decorative throw pillows.
              Couch pillows, bed pillow made in cute animal shapes. You can even customized your own pillow!
            </p>
          </header>
          {this.renderPageView()}
        </div>
      </div>
    );
  }
}

export default App;
