import React, { Component } from 'react';
import OrderItem from './components/OrderItem';
import './style.css';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      total: 0,
      items: [
        { name: 'Hot Dog', price: 3 },
        { name: 'Hamburger', price: 5 },
        { name: 'Cheeseburger', price: 6 },
        { name: 'Cheese Pizza', price: 11 },
        { name: 'Popcorn Tub', price: 2 }
      ]
    }
  }

  addTotal(price) {
    const {total} = this.state;
    this.setState( { total: total + price } );
  }

  render() {
    const {items, total} = this.state;
    let orderItems = items.map((item, index) => {
      return(
        <OrderItem key={index} name={item.name} price={item.price} active={item.active} addTotal={this.addTotal.bind(this)} />
      )
    });
    return(
      <div>
        <h1>Our Menu</h1>
        <div id="items">
            {orderItems}
            <p id="total">Total <b>${total.toFixed(2)}</b></p>
        </div>
      </div>
    );
  }
}
