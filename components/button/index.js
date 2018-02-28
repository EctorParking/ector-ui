// @flow

import React, { Component } from 'react';

import s from './button.css';

class Button extends Component {
  static defaultProps = {
    fetching: false,
    children: 'Valider',
  };

  props :{
    fetching ?:boolean,
    children :string,
  };

  render() {
    <div>{ this.props.children }</div>
  }
}

export default Button;
