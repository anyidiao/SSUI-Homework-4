import React, { Component } from 'react';
import './App.css';


class Cart extends Component{
  constructor(props) {
    super(props);
  }

  render() {
    var elements = []
    for (var i=0; i < this.props.items.length; i++)
    {
      var item = this.props.items[i]
      elements.push(
        <div className="cartItem">
          <img className="smallProductImage" src={item.image} alt={item.altText} />
          <div className="productLabel">
            <p className="itemTitle">{item.title}</p>
            <p>Price: ${item.price}    Quantity: {item.quantity}</p>
            <p>{item.description}</p>
          </div>
        </div>
      );
    }
    if (elements.length == 0) {
      elements.push(<p className="subtitle">No items yet.</p>)
    }
    return (
      <div className="shoppingCartPane">
        <div className="Xout" onClick={this.props.onClose}>X</div>
        <p className="paneTitle">Shopping Cart</p>
        {elements}
        <button className="btn btn-lg">Checkout</button>
      </div>
    );
  }
}

export default Cart;
