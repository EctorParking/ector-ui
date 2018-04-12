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
    onClick :() => void,
  };

  render() {
    return (<a
      className={s.root}
      onClick={this.props.onClick}
    >{ this.props.children }</a>);
  }
}

export default Button;
