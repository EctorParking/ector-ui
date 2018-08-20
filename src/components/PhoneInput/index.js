import React from 'react';
import PropTypes from 'prop-types';
import Select from '../Select';
import Input from '../Input';

import s from './PhoneInput.css';

const values = [
  { value: 'fr', label: '+33', image: './images/flags/fr.png' },
  { value: 'uk', label: '+44', image: './images/flags/uk.png' },
];

const PhoneInput = ({
  className,
  countryCode,
  value,
  onCountryCodeChange,
  onPhoneNumberChange,
}) => (
  <div className={`${s.phoneInput} ${className}`}>
    <Select
      values={values}
      selected={countryCode}
      hasImage
      onChange={onCountryCodeChange}
    />
    <Input
      placeholder="06 07 08 09 00"
      type="text"
      onChange={onPhoneNumberChange}
      {...value}
    />
  </div>
);

PhoneInput.defaultProps = {
  className: '',
  countryCode: values[0].value,
};

PhoneInput.propTypes = {
  className: PropTypes.string,
  countryCode: PropTypes.string,
  value: PropTypes.string.isRequired,
  onCountryCodeChange: PropTypes.func.isRequired,
  onPhoneNumberChange: PropTypes.func.isRequired,
};

export default PhoneInput;
