import React, { Component } from 'react';
import './App.css';
import StoreItem from './StoreItem.js';
import Cart from './Cart.js';
import DetailItemView from './DetailItemView.js'

import bedPillow from './images/bed_pillow.jpg';
import floorPoufPillow from './images/floor_pouf_pillow.jpg';
import roundPillow from './images/round_pillow.jpg';
import couchPillow from './images/home_pillow.jpg';

class Store extends Component{
  constructor(props) {
    super(props);
    var bed_qty = localStorage.getItem('bed_qty') || '0'
    var floor_pouf_qty = localStorage.getItem('floor_pouf_qty') || '0'
    var round_qty = localStorage.getItem('round_qty') || '0'
    var couch_qty = localStorage.getItem('couch_qty') || '0'
    var bed = {image: bedPillow, altText: "bed pillow", title: "Bed Pillow", name: "bed", price: 20.99, quantity: this.props.bed_qty, description: "Made with our Patented Interlocking Fill"}
    var floor_pouf = {image: floorPoufPillow, altText: "floor pouf pillow", title: "Floor Pouf Pillow", name: "floor_pouf", price: 24.99, quantity: this.props.floor_pouf_qty, description: "Use for Living Room, Bedrooms, Home Decor Etc."}
    var round = {image: roundPillow, altText: "round pillow", title: "Round Pillow", name: "round", price: 16.99, quantity: this.props.round_qty, description: "Made of pure canvas cotton with embroidered cover."}
    var couch = {image: couchPillow, altText: "couch pillow", title: "Couch Pillow", name: "couch", price: 19.99, quantity: this.props.couch_qty, description: "Made of durable cotton blend linen, slightly rough texture,lightweight"}

    this.state = {
      inventory: [couch, bed, round, floor_pouf],
      detail: null,
      bed_qty: this.props.bed_qty,
      floor_pouf_qty: this.props.floor_pouf_qty,
      round_qty: this.props.round_qty,
      couch_qty: this.props.couch_qty,
    }
  }

  getItemQtn(name) {
    if(name === 'bed')
      return this.props.bed_qty;
    if(name === 'couch')
      return this.props.couch_qty;
    if(name === 'floor_pouf')
      return this.props.floor_pouf_qty;
    if(name === 'round')
      return this.props.round_qty;
  }


  selectItem(id) {
    console.log("selected ",id)
    var item = this.state.inventory[id]
    var product_qty = this.getItemQtn(item.name)
    var detailView = <DetailItemView onClose = {(ev) => this.setState({detail: null})} onQtyChange = {this.props.onQtyChange} onProductQtyChange = {this.props.onProductQtyChange} image = {item.image} altText = {item.altText} title = {item.title} quantity = {product_qty} price = {item.price} name = {item.name} description = {item.description} />
    this.setState({detail: detailView})
  }

  renderDetailView() {
    if(this.state.detail !== null)
    {
      return this.state.detail
    }
  }

  renderShoppingCart() {
    var elements = []
    for(var i=0; i < this.state.inventory.length; i++)
    {
      var item = this.state.inventory[i]
      var product_qty = this.getItemQtn(item.name)
      if(product_qty > 0) {
        elements.push(item)
      }
    }
    return <Cart items = {elements}/>
  }

  renderInventory() {
    var elements = []
    for(var i=0; i < this.state.inventory.length; i++)
    {
      var item = this.state.inventory[i]
      var product_qty = this.getItemQtn(item.name)
      elements.push(<StoreItem total_qty = {this.props.total_qty} onQtyChange = {this.props.onQtyChange} onProductQtyChange = {this.props.onProductQtyChange} onClick = {this.selectItem.bind(this, i)} image = {item.image} altText = {item.altText} title = {item.title} name = {item.name} quantity = {product_qty} price = {item.price} description = {item.description} />)
    }
    return (
      <div>
        {elements}
        {this.renderDetailView()}
      </div>
    )
  }

  render() {
    return (
      this.renderInventory()
    );
  }
}


export default Store;
