import React from 'react';
import PropTypes from 'prop-types';
import SelectValueType from './SelectValueType';

import s from './Select.css';

const renderSelectOption = option => (
  <option value={option}>{option}</option>
);

const Select = (props) => {
  const {
    value, options, children, className, renderOption, ...selectProps
  } = props;
  const optionRenderer = renderOption || renderSelectOption;

  return (
    <div className={[s.select, className].join(' ')}>
      <select value={value} {...selectProps}>
        { options.map(optionRenderer) }
      </select>
      {
        children !== null ? (
          children
        ) : (
          <span className={s.label}>
            {value}
          </span>
        )
      }
    </div>
  );
};

Select.defaultProps = {
  children: null,
  className: '',
  renderOption: null,
};

Select.propTypes = {
  options: PropTypes.arrayOf(SelectValueType).isRequired,
  value: PropTypes.string.isRequired,
  children: PropTypes.node,
  className: PropTypes.string,
  renderOption: PropTypes.func,
};


export default Select;
