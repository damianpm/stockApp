import React, {Component} from 'react';
import ElementList from './elementList';
import './css/list.css';

class List extends Component {

  render() {
    return (
      <ul>
        {this.props.queries.map((query) => {
          return <ElementList query={query}/>;
        })}
      </ul>
    );
  }
}

export default List;
