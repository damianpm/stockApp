import React, {Component} from 'react';
import Form from './components/form';
import List from './components/list';
import {Row} from 'react-bootstrap';
import {fetchData} from './api/financeAPI';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      queries: [''],
      qty: 0,
      price: 0,
      date: '',
      symbol: '',
      keyIndex: 0
    };
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleSymbolChange = this.handleSymbolChange.bind(this);
    this.handlePriceChange = this.handlePriceChange.bind(this);
    this.handleQtyChange = this.handleQtyChange.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();
    const state = this.state;
    
    const resultsData = fetchData(state.symbol);
    // console.log(resultsData);
    const queryAsString = `${state.symbol} / ${state.qty} * ${state.price} = total / ${state.date}`
    // const = fetchDate
    // let queries = this.state.queries;
    // queries.push(query)
    // this.setState({queries: queries});
  }
  handleSymbolChange(e) {
    this.setState({symbol: e.target.value})
  }
  handlePriceChange(e) {
    this.setState({price: e.target.value})
  }
  handleQtyChange(e) {
    this.setState({qty: e.target.value});
  }
  handleDateChange(e) {
    this.setState({date: e.target.value});
  }

  render() {
    return (
      <div className="App">
        <Row>
          <div className="App-header">
            <h2>Portfolio</h2>
          </div>
        </Row>
        <Row>
          <Form 
            onSubmit={this.handleSubmit}
            price={this.state.price}
            qty={this.state.qty}
            date={this.state.date}
            symbol={this.state.symbol}
            onSymbolChange={this.handleSymbolChange}
            onPriceChange={this.handlePriceChange}
            onQtyChange={this.handleQtyChange}
            onDateChange={this.handleDateChange}/>
        </Row>
        <Row>
          <List queries={this.state.queries}/>
        </Row>
      </div>
    );
  }
}

export default App;
