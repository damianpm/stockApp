import React, {Component} from 'react';
import Form from './components/form';
import List from './components/list';
import {Row, Col} from 'react-bootstrap';
import financeAPI from './api/financeAPI';
import {loadState, saveState} from './api/localStorage'
import moment from 'moment';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      queries: [],
      qty: 0,
      boughtPrice: 0,
      currentPrice: 0,
      date: moment(),
      symbol: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleSymbolChange = this.handleSymbolChange.bind(this);
    this.handlePriceChange = this.handlePriceChange.bind(this);
    this.handleQtyChange = this.handleQtyChange.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
  }
  componentDidMount(){
    let localQueries = loadState();
    this.setState({queries: localQueries});
  }
  updateList() {
    const state = this.state;
    const priceFixed = Number(state.boughtPrice).toFixed(2);
    const totalPriceBefore = state.qty * priceFixed;
    const queryAsString = `${state.symbol}  /  ${state.qty} * $${priceFixed} = $${totalPriceBefore}  /  ${moment(state.date).format('L')}`;

    const totalPrice = state.qty * state.currentPrice;
    const profitValue = Number(totalPrice - totalPriceBefore).toFixed(2);
    const win = profitValue > 0
      ? true
      : false;
    const updatedQueries = this.state.queries.slice(0);
    updatedQueries.push({queryAsString, profitValue, currentPrice: state.currentPrice, win});
    this.setState({
      queries: updatedQueries
    }, ()=>{
      this.clearForm();
      saveState(this.state.queries);
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const state = this.state;
    financeAPI.getData(state.symbol).then(data => this.updatePrice(data), error => this.showErrorMsg(error));
  }

  showErrorMsg(e) {
    alert(e);
  }

  updatePrice(data) {
    const fixedString = data.substring(data.indexOf('{'), data.indexOf(']'));
    const parsedData = JSON.parse(fixedString);

    const currentPrice = parsedData.l_cur;
    this.setState({
      currentPrice
    }, this.updateList)
  }

  clearForm() {
    this.setState({qty: 0, boughtPrice: 0, date: moment(), symbol: ''});
  }
  handleSymbolChange(e) {
    this.setState({symbol: e.target.value})
  }
  handlePriceChange(e) {
    this.setState({boughtPrice: e.target.value})
  }
  handleQtyChange(e) {
    this.setState({qty: e.target.value});
  }
  handleDateChange(date) {
    this.setState({date: date});
  }

  render() {
    return (
      <div className="App">
        <Col sm={12} md={8} mdOffset={2} lg={6} lgOffset={3}>
          <Row>
            <div className="App-header">
              <h2>Portfolio</h2>
            </div>
          </Row>
          <Row>
            <Form onSubmit={this.handleSubmit} price={this.state.boughtPrice} qty={this.state.qty} date={this.state.date} symbol={this.state.symbol} onSymbolChange={this.handleSymbolChange} onPriceChange={this.handlePriceChange} onQtyChange={this.handleQtyChange} onDateChange={this.handleDateChange}/>
          </Row>
          <Row>
            <List queries={this.state.queries}/>
          </Row>
        </Col>
      </div>
    );
  }
}

export default App;
