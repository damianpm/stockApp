import React, {Component} from 'react';
import ElementList from './elementList';
import './css/list.css';

class List extends Component {

  render() {
    return (
      <ul>
        {this.props.elements.map((elem) => {
          return <ElementList key={elem.name} name={elem.name}/>;
        })}
      </ul>
    );
  }
}

export default List;
