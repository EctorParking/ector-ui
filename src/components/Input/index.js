import React from 'react';
import PropTypes from 'prop-types';

import s from './Input.module.css';

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
  containerClassName,
  ...restOfProps
}) => (
  <div className={[s.container, containerClassName].join(' ')}>
    <LeftComponent className={s.inputPrepend} />
    <input
      className={[s.input, hasError ? s.inputWithError : '', className].join(
        ' '
      )}
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
  containerClassName: undefined,
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
  containerClassName: PropTypes.string,
};

export default Input;
