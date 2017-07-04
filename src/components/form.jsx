import React, {Component} from 'react';

class Form extends Component {

  render() {
    return (
      <form onSubmit={e => this.props.onSubmit(e)} >
        <input type="text" value={this.props.symbol} onChange={this.props.onSymbolChange}/>
        <input type="number" value={this.props.price} onChange={this.props.onPriceChange}/>
        <input type="number" value={this.props.qty} onChange={this.props.onQtyChange}/>
        <input type="text" value={this.props.date} onChange={this.props.onDateChange}/>
        <button>+</button>
      </form>
    );
  }
}

export default Form;
