import React from 'react';
import PropTypes from 'prop-types';

import s from './Input.css';

const Input = ({
  onFocus,
  onBlur,
  onChange,
  checked,
  value,
  hasError,
  className,
  onKeyDown,
  LeftComponent,
  RightComponent,
  ...restOfProps
}) => (
  <div className={s.container}>
    <LeftComponent className={s.inputPrepend} />
    <input
      className={[s.input, hasError ? s.inputWithError : '', className].join(' ')}
      onFocus={onFocus}
      onBlur={onBlur}
      onChange={onChange}
      checked={checked}
      value={value}
      onKeyDown={onKeyDown}
      {...restOfProps}
    />
    <RightComponent className={s.inputAppend} />
  </div>

);

Input.defaultProps = {
  placeholder: '',
  id: '',
  onFocus: () => {},
  onBlur: () => {},
  onChange: () => {},
  checked: false,
  value: '',
  className: '',
  hasError: false,
  type: 'text',
  onKeyDown: () => {},
  LeftComponent: () => null,
  RightComponent: () => null,
};

Input.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
  id: PropTypes.string,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  checked: PropTypes.bool,
  value: PropTypes.string,
  className: PropTypes.string,
  hasError: PropTypes.bool,
  onKeyDown: PropTypes.func,
  LeftComponent: PropTypes.func,
  RightComponent: PropTypes.func,
};


export default Input;
