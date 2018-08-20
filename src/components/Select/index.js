import React from 'react';
import PropTypes from 'prop-types';
import SelectValue from './SelectValue';
import SelectValueType from './SelectValueType';

import s from './Select.css';

const getSelectedValue = (values, selected) => values.find(({ value }) => value === selected);

const getPreferedValues = (preferredValues, values) =>
  preferredValues.map(prefValue => values.find(value => value.value === prefValue));

const Select = ({
  values,
  preferredValues,
  hasImage,
  selected,
  onChange,
  className,
}) => (
  <div className={`${s.select} ${className}`}>
    <select onChange={e => onChange(e.target.value)} defaultValue={selected}>
      <optgroup>
        {
          getPreferedValues(preferredValues, values).map(value => (
            <SelectValue
              value={value}
              key={value.value}
            />
          ))
        }
      </optgroup>
      <optgroup>
        {values.map(value => (
          <SelectValue
            value={value}
            key={value.value}
          />
        ))}
      </optgroup>
    </select>
    {
      hasImage &&
      <img
        src={getSelectedValue(values, selected).image}
        className={s.selectImage}
        alt={getSelectedValue(values, selected).label}
      />
    }
    <span className={s.label}>
      {getSelectedValue(values, selected).label}
    </span>
  </div>
);

Select.defaultProps = {
  hasImage: false,
  onChange: () => {},
  className: '',
  preferredValues: [],
};

Select.propTypes = {
  values: PropTypes.arrayOf(SelectValueType).isRequired,
  preferredValues: PropTypes.arrayOf(PropTypes.string),
  hasImage: PropTypes.bool,
  selected: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  className: PropTypes.string,
};

export default Select;
