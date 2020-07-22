import React from 'react';
import PropTypes from 'prop-types';
import SelectValueType from './SelectValueType';

import s from './Select.module.css';

const renderSelectOption = option => (
  <option value={option} key={option}>{option}</option>
);

const Select = (props) => {
  const {
    value, options, children, className, hasError, renderOption, ...selectProps
  } = props;
  const optionRenderer = renderOption || renderSelectOption;

  return (
    <div className={[s.select, selectProps.disabled ? s.disabled : undefined, hasError ? s.inputWithError : '', className].join(' ')}>
      <select value={value} {...selectProps}>
        { options.map(optionRenderer) }
      </select>
      {
        children !== null ? (
          children
        ) : (
          null
        )
      }
    </div>
  );
};

Select.defaultProps = {
  children: null,
  className: '',
  renderOption: null,
  disabled: false,
  hasError: false,
};

Select.propTypes = {
  options: PropTypes.arrayOf(SelectValueType).isRequired,
  value: PropTypes.string.isRequired,
  children: PropTypes.node,
  className: PropTypes.string,
  renderOption: PropTypes.func,
  disabled: PropTypes.bool,
  hasError: PropTypes.bool,
};

export default Select;
