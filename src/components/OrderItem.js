import React, { Component } from 'react';

class OrderItem extends Component {
  constructor() {
    super();
    this.state = {
      active: false
    }
  }

  clickHandler() {
    const {active} = this.state;
    const {addTotal, price} = this.props;
    this.setState({ active: !active }, () => {
      addTotal( !active ? price : -price);
    });
  }

  render() {
    const {price} = this.props;
    const {active} = this.state;
    return (
      <p className={ this.state.active ? 'active' : '' } onClick={this.clickHandler.bind(this)}>
        {this.props.name} <b>${price.toFixed(2)}</b>
      </p>
    )
  }
}

export default OrderItem;
