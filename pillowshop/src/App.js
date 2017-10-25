import React, { Component } from 'react';
import Store from './Store.js';
import About from './About.js';
import pillowBackdrop from './images/bgd_pillow.jpg';
import cartIcon from './images/shopping-cart.svg';
import bedPillow from './images/bed_pillow.jpg';
import floorPoufPillow from './images/floor_pouf_pillow.jpg';
import roundPillow from './images/round_pillow.jpg';
import couchPillow from './images/home_pillow.jpg';

import Cart from './Cart.js';
import StoreItem from './StoreItem.js'

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    localStorage.setItem('total', '0');
    localStorage.setItem('bed_qty', '0');
    localStorage.setItem('round_qty', '0');
    localStorage.setItem('couch_qty', '0');
    localStorage.setItem('floor_pouf_qty', '0');
    var bed_qty = localStorage.getItem('bed_qty') || '0'
    var floor_pouf_qty = localStorage.getItem('floor_pouf_qty') || '0'
    var round_qty = localStorage.getItem('round_qty') || '0'
    var couch_qty = localStorage.getItem('couch_qty') || '0'
    var bed = {image: bedPillow, altText: "bed pillow", title: "Bed Pillow", name: "bed", price: 20.99, quantity: bed_qty, description: "Made with our Patented Interlocking Fill"}
    var floor_pouf = {image: floorPoufPillow, altText: "floor pouf pillow", title: "Floor Pouf Pillow", name: "floor_pouf", price: 24.99, quantity: floor_pouf_qty, description: "Use for Living Room, Bedrooms, Home Decor Etc."}
    var round = {image: roundPillow, altText: "round pillow", title: "Round Pillow", name: "round", price: 16.99, quantity: round_qty, description: "Made of pure canvas cotton with embroidered cover."}
    var couch = {image: couchPillow, altText: "couch pillow", title: "Couch Pillow", name: "couch", price: 19.99, quantity: couch_qty, description: "Made of durable cotton blend linen, slightly rough texture,lightweight"}
    this.state = {
      shoppingCartView: null,
      page: 0,
      total_qty: 0,
      bed_qty: 0,
      round_qty: 0,
      couch_qty: 0,
      floor_pouf_qty: 0,
      inventory: [couch, bed, round, floor_pouf],
    };
  }

  navToShopPage() {
    this.setState({page: 0})
  }

  renderPageView() {
    if(this.state.page === 0)
      return <Store total_qty={this.state.total_qty} bed_qty={this.state.bed_qty} round_qty={this.state.round_qty} couch_qty={this.state.couch_qty} floor_pouf_qty={this.state.floor_pouf_qty} onProductQtyChange = {this.handleProductQtyChange.bind(this)} onQtyChange={this.handleQtyChange.bind(this)} />
    if(this.state.page === 1)
      return <About/>
  }

  handleQtyChange(new_qty) {
    this.setState({total_qty: new_qty});
  }

  handleProductQtyChange(name, qty) {
    if(name === 'couch')
      this.setState({couch_qty: qty})
    if(name === 'round')
      this.setState({round_qty: qty})
    if(name === 'floor_pouf')
      this.setState({floor_pouf_qty: qty})
    if(name === 'bed')
      this.setState({bed_qty: qty})
  }

  getItemQtn(name) {
    if(name === 'bed')
      return this.state.bed_qty;
    if(name === 'couch')
      return this.state.couch_qty;
    if(name === 'floor_pouf')
      return this.state.floor_pouf_qty;
    if(name === 'round')
      return this.state.round_qty;
  }

  renderShoppingCartView() {
    if(this.state.shoppingCartView !== null)
    {
      return this.state.shoppingCartView
    }
  }

  renderShoppingCart() {
    var elements = []
    for(var i=0; i < this.state.inventory.length; i++)
    {
      var item = this.state.inventory[i]
      var product_qty = this.getItemQtn(item.name)
      console.log(item.name + " : " + product_qty)
      item.quantity = product_qty
      if(product_qty > 0) {
        elements.push(item)
      }
    }
    var view = <Cart items={elements} onClose = {(ev) => this.setState({shoppingCartView: null})}/>
    this.setState({shoppingCartView: view})
  }

  render() {
    return (
      <div className="App">
        <img src={pillowBackdrop} className="App-largePillowImage" alt="stitch pillow" />
        <div className = "App-background" />
        <div className = "App-content">
          <div className = "App-navMenu">
            <div className = {"App-navMenu-button" + (this.state.page === 0 ? " active" : "")} onClick={this.navToShopPage.bind(this)}>Shop</div>
            <div className = {"App-navMenu-button" + (this.state.page === 1 ? " active" : "")} onClick={(ev) => this.setState({page: 1})} >About</div>
            <div className = "App-navMenu-button" onMouseEnter={this.renderShoppingCart.bind(this)}><img src={cartIcon} className="App-cartIcon" alt="shopping cart" />{this.state.total_qty}</div>
          </div>
          <header className="App-header">
            <h1 className="App-title">Flip Stitch Pillow</h1>
            <p className="App-intro">
              Tired of dull pillows? We specialize in custom decorative throw pillows.
              Couch pillows, bed pillow made in cute animal shapes. You can even customized your own pillow!
            </p>
          </header>
          {this.renderPageView()}
          {this.renderShoppingCartView()}
        </div>
      </div>
    );
  }
}

export default App;
