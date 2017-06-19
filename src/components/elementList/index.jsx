import React, {Component} from 'react';

class ElementList extends Component {

  render() {
    return (
      <li>
        {this.props.name}
      </li>
    );
  }
}

export default ElementList;
