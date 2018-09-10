import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Select, InputLabel, Input } from '../';
import ukFlag from '../../images/flags/uk.png';
import frFlag from '../../images/flags/fr.png';

import s from './PhoneInput.css';

const countries = [
  { value: 'fr', label: '+33', image: frFlag },
  { value: 'uk', label: '+44', image: ukFlag },
];

class PhoneInput extends React.Component {
  constructor(props) {
    super(props);
    let country;
    let phone = '';

    if (props.value && props.value !== PhoneInput.defaultProps.value) {
      country = countries.find(c => props.value.startsWith(c.label));
      if (country) {
        phone = props.value.substring(country.label.length);
      }
    }
    this.state = {
      country: country || countries[0],
      phone,
    };

    this.onCountryCodeChange = this.onCountryCodeChange.bind(this);
    this.onPhoneNumberChange = this.onPhoneNumberChange.bind(this);
  }

  onCountryCodeChange(event) {
    const { currentTarget: { value: countryCode } } = event;
    const country = countries.find(option => option.value === countryCode);

    this.setState({ country });
  }

  onPhoneNumberChange(event) {
    const { onChange } = this.props;
    const { country } = this.state;
    const { currentTarget: { value } } = event;

    this.setState({ phone: value });
    onChange(event, `${country.label}${value}`);
  }

  renderSelectOption = option => (
    <option key={option.value} value={option.value}>
      {option.label}
    </option>
  );

  renderPhoneInputs = () => {
    const { error, ...phoneInputProps } = this.props;
    const { country, phone } = this.state;

    return (
      <Fragment>
        <Select
          options={countries}
          value={country.value}
          renderOption={this.renderSelectOption}
          onChange={this.onCountryCodeChange}
        >
          <img
            src={country.image}
            className={s.selectImage}
            alt={country.label}
          />
          <span>
            {country.label}
          </span>
        </Select>
        <Input
          {...phoneInputProps}
          hasError={!!error && error.length > 0}
          inputPlaceHolder="06 07 08 09 00"
          inputType="text"
          onChange={this.onPhoneNumberChange}
          value={phone}
        />
      </Fragment>
    );
  };

  render() {
    const {
      label, error, mandatory, left,
    } = this.props;

    return (
      <InputLabel
        error={error}
        label={label}
        left={left}
        mandatory={mandatory}
        InputComponent={this.renderPhoneInputs}
      />
    );
  }
}

PhoneInput.defaultProps = {
  onChange: () => {},
  onFocus: () => {},
  onBlur: () => {},
  value: '',
  error: '',
  label: '',
  mandatory: false,
  left: false,
};

PhoneInput.propTypes = {
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  error: PropTypes.string,
  value: PropTypes.string,
  label: PropTypes.string,
  mandatory: PropTypes.bool,
  left: PropTypes.bool,
};


export default PhoneInput;
