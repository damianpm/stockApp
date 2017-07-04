import React, {Component} from 'react';

class ElementList extends Component {

  render() {
    return (
      <li>
        {this.props.query}
      </li>
    );
  }
}

export default ElementList;
