import React from 'react';
import PropTypes from 'prop-types';
import GenderType from './GenderType';
import RadioButton from '../RadioButton';

import s from './GenderPicker.css';

const GenderPicker = ({
  genders,
  onSelect,
  selected,
  className,
}) => (
  <div className={s.genderPicker}>
    {genders.map(gender => (
      <RadioButton
        value={gender.value}
        label={gender.label}
        name="gender"
        checked={gender.value === selected}
        onSelect={onSelect}
      />
    ))}
  </div>
);

GenderPicker.defaultProps = {
  selected: '',
  onSelect: () => {},
  className: '',
};

GenderPicker.propTypes = {
  selected: PropTypes.string,
  genders: PropTypes.arrayOf(GenderType).isRequired,
  onSelect: PropTypes.func,
  className: PropTypes.string,
};

export default GenderPicker;
