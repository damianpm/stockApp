import React, {Component} from 'react';
import NumberFormat from 'react-number-format';

class ElementList extends Component {

  render() {
    return (
      <div className="results">
        <div>{this.props.queryAsString}</div>
        <div className={this.props.win
          ? 'win'
          : 'loose'}>
          <span>{this.props.currentPrice}</span>
          /
          <span><NumberFormat value={this.props.profit} displayType={'text'} thousandSeparator={true} prefix={'$'}/></span>
        </div>
      </div>
    );
  }
}

export default ElementList;
