import React, {Component} from 'react';
import Form from './components/form';
import List from './components/list';
import {Row} from 'react-bootstrap';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      elements: [{name:'First element'}]
    };
  }
  handleSubmit (event) {
    event.preventDefault();
    // this.setState({
    //   elements: this.state.elements.push({name: 'New elem'})
    // });
    console.log('**');
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
          <Form onSubmit={this.handleSubmit}/>
        </Row>
        <Row>
          <List elements={this.state.elements}/>
        </Row>
      </div>
    );
  }
}

export default App;
