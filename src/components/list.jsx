import React, {Component} from 'react';
import ElementList from './elementList';
import './css/list.css';

class List extends Component {

  render() {
    return (
      <div>
        {this.props.queries.map((query) => {
          return <ElementList queryAsString={query.queryAsString} currentPrice={query.currentPrice} profit={query.profitValue} win={query.win}/>;
        })}
      </div>
    );
  }
}

export default List;
