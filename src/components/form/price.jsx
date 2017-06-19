import React, {Component} from 'react';

class Price extends Component {
  constructor(props) {
    super(props);
    this.state = {
      priceValue: 'Price'
    };

    this.handleChange = this.handleChange.bind(this);

  }
  handleChange(event) {
    this.setState({priceValue: event.target.value});
  }
  render() {
    return (<input type="text" value={this.state.priceValue} onChange={this.handleChange}/>);
  }
}

export default Price;
