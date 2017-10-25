import React, { Component } from 'react';
import './App.css';

class StoreItem extends Component{
  constructor(props) {
    super(props);
    this.state = {
      product_qty: parseInt(localStorage.getItem(this.props.name+'_qty'), 10),
    };
  }

  addItem() {
    console.log("added one " + this.props.title);
    var prev_total = parseInt(localStorage.getItem('total'), 10);
    localStorage.setItem('total', prev_total+1);
    this.props.onQtyChange(prev_total+1);
    var product_qty = parseInt(localStorage.getItem(this.props.name+'_qty'), 10) + 1;
    console.log(this.props.name+'_qty')
    localStorage.setItem(this.props.name+'_qty', product_qty);
    this.props.onProductQtyChange(this.props.name, product_qty);
    this.setState({product_qty: product_qty});
  }

  removeItem() {
    var prev_product_qty = parseInt(localStorage.getItem(this.props.name+'_qty'), 10);
    if (prev_product_qty > 0) {
      console.log("removed one " + this.props.title);
      var prev_total = parseInt(localStorage.getItem('total'), 10);
      localStorage.setItem('total', Math.max(prev_total-1, 0));
      this.props.onQtyChange(Math.max(prev_total-1, 0));
      var product_qty = Math.max(parseInt(localStorage.getItem(this.props.name+'_qty'), 10) - 1, 0);
      localStorage.setItem(this.props.name+'_qty', product_qty);
      this.props.onProductQtyChange(this.props.name, product_qty);
      this.setState({product_qty: product_qty});
    }
  }

  render() {
    return (
      <div className="productWrapper">
        <img className="productImage" src={this.props.image} alt={this.props.altText} onClick = {this.props.onClick}/>
        <div className="productLabel">
          <p className="productTitle" onClick = {this.props.onClick}>{this.props.title}</p>
          <p>Price: ${this.props.price}</p>
          <p>Qty: <button className="removeItem" onClick={this.removeItem.bind(this)}>-</button> {this.state.product_qty} <button className="addItem" onClick={this.addItem.bind(this)}>+</button></p>
        </div>
      </div>
    );
  }
}


export default StoreItem;
