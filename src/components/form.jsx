import React, {Component} from 'react';
import {Col} from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

class Form extends Component {

  render() {
    return (
      <form onSubmit={e => this.props.onSubmit(e)}>
        <Col sm={12} md={4}><input id="symbolInput" type="text" value={this.props.symbol} onChange={this.props.onSymbolChange} placeholder="Symbol" required/></Col>
        <Col sm={12} md={2}><input type="number" value={this.props.price} onChange={this.props.onPriceChange} min="0.01" step="0.01" required/></Col>
        <Col sm={12} md={2}><input type="number" value={this.props.qty} onChange={this.props.onQtyChange} min="1" required/></Col>
        <Col sm={12} md={3}><DatePicker selected={this.props.date} onChange={this.props.onDateChange} dateFormat="DD/MM/YYYY"/></Col>
        <Col sm={12} md={1}><input type="submit" value="+"/></Col>
      </form>
    );
  }
}

export default Form;
