import React from 'react';
import SelectValueType from './SelectValueType';

const SelectValue = ({ value }) => (
  <option value={value.value}>{value.label}</option>
);

SelectValue.propTypes = {
  value: SelectValueType.isRequired,
};

export default SelectValue;
