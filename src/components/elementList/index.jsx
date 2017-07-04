import React, {Component} from 'react';

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
          <span>{this.props.profit}</span>
        </div>
      </div>
    );
  }
}

export default ElementList;
