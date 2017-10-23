import React, { Component } from 'react';
import './App.css';


class DetailItemView extends Component{
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="detailPane">
        <div className="Xout" onClick={this.props.onClose}>X</div>
        <div className="detailPane-inner">
          <img className="productImage" src={this.props.image} alt={this.props.altText} />
          <div className="productLabel">
            <p>{this.props.title}</p>
            <p>Price: ${this.props.price}</p>
            <p>Qty: {this.props.quantity}</p>
            <p>{this.props.description}</p>
          </div>
        </div>
      </div>
    );
  }
}


export default DetailItemView;
