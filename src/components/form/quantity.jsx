import React, {Component} from 'react';

class Quantity extends Component {
  constructor(props) {
    super(props);
    this.state = {
      qtyValue: 'Qty'
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({qtyValue: event.target.value});
  }

  render() {
    return (<input type="text" value={this.state.qtyValue} onChange={this.handleChange}/>);
  }
}

export default Quantity;
