import React from 'react';
import PropTypes from 'prop-types';
import Select from '../Select';
import Input from '../Input';

import s from './PhoneInput.css';

/* eslint-disable global-require */
const values = [
  { value: 'fr', label: '+33', image: require('../../images/flags/fr.svg') },
  { value: 'es', label: '+34', image: require('../../images/flags/es.svg') },
  { value: 'gb', label: '+44', image: require('../../images/flags/gb.svg') },
  { value: 'de', label: '+49', image: require('../../images/flags/de.svg') },
];

const PhoneInput = ({
  className,
  countryCode,
  value,
  preferredCountries,
  onCountryCodeChange,
  onPhoneNumberChange,
}) => (
  <div className={`${s.phoneInput} ${className}`}>
    <Select
      values={values}
      preferredValues={preferredCountries}
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
  preferredCountries: ['fr', 'gb'],
};

PhoneInput.propTypes = {
  className: PropTypes.string,
  countryCode: PropTypes.string,
  value: PropTypes.string.isRequired,
  preferredCountries: PropTypes.arrayOf(PropTypes.string),
  onCountryCodeChange: PropTypes.func.isRequired,
  onPhoneNumberChange: PropTypes.func.isRequired,
};

export default PhoneInput;
