import React, {Component} from 'react';

class Symbol extends Component {
  constructor(props) {
    super(props);
    this.state = {
      symbolValue: 'Symbol'
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({symbolValue: event.target.value});
  }

  render() {
    return (<input type="text" value={this.state.symbolValue} onChange={this.handleChange}/>);
  }
}

export default Symbol;
