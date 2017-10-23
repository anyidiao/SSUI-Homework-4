import React, { Component } from 'react';
import './App.css';

class StoreItem extends Component{
  constructor(props) {
    super(props);
  }

  addItem() {
    console.log("added one " + this.props.title)
    var prev_total = parseInt(localStorage.getItem('total') || '0')
    localStorage.setItem('total', prev_total+1)
    this.props.quantity = parseInt(localStorage.getItem(this.props.title+'_qty') || '0') + 1
    localStorage.setItem(this.props.title+'_qty', this.props.quantity)
  }

  removeItem() {
    console.log("removed one " + this.props.title)
    var prev_total = parseInt(localStorage.getItem('total') || '0')
    localStorage.setItem('total', prev_total-1)
    this.props.quantity = parseInt(localStorage.getItem(this.props.title+'_qty') || '0') - 1
    localStorage.setItem(this.props.title+'_qty', this.props.quantity)
  }

  render() {
    return (
      <div className="productWrapper">
        <img className="productImage" src={this.props.image} alt={this.props.altText} onClick = {this.props.onClick}/>
        <div className="productLabel">
          <p className="productTitle" onClick = {this.props.onClick}>{this.props.title}</p>
          <p>Price: ${this.props.price}</p>
          <p>Qty: <button className="removeItem" onClick={this.removeItem.bind(this)}>-</button> {this.props.quantity} <button className="addItem" onClick={this.addItem.bind(this)}>+</button></p>
        </div>
      </div>
    );
  }
}


export default StoreItem;
