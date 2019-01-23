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
  error,
}) => (
  <div>
    <div className={[s.genderPicker, className].join(' ')}>
      {genders.map(gender => (
        <RadioButton
          key={gender.value}
          value={gender.value}
          label={gender.label}
          name="gender"
          checked={gender.value === selected}
          onSelect={onSelect}
        />
      ))}
    </div>
    {
      !!error && (
        <div className={s.error}>{error}</div>
      )
    }
  </div>
);

GenderPicker.defaultProps = {
  selected: '',
  onSelect: () => {},
  className: '',
  error: null,
};

GenderPicker.propTypes = {
  selected: PropTypes.string,
  genders: PropTypes.arrayOf(GenderType).isRequired,
  onSelect: PropTypes.func,
  className: PropTypes.string,
  error: PropTypes.string,
};

export default GenderPicker;
