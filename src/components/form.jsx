import React, {Component} from 'react';
import Symbol from './form/symbol';
import Price from './form/price';
import Quantity from './form/quantity';
import Date from './form/date';
// import SubmitButton from './form/submitButton';

class Form extends Component {

  render() {
    return (
      <form onSubmit={this.props.handleSubmit} >
        <Symbol/>
        <Price/>
        <Quantity/>
        <Date/>
        {/* <SubmitButton onClick={this.props.handleAddElement}/> */}
        <input type="submit" value='+'/>
      </form>
    );
  }
}

export default Form;
