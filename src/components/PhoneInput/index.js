import React from 'react';
import PropTypes from 'prop-types';
import { Select, InputLabel, Input } from '../';
import frFlag from '../../images/flags/fr.svg';
import gbFlag from '../../images/flags/gb.svg';
import esFlag from '../../images/flags/es.svg';
import deFlag from '../../images/flags/de.svg';
import s from './PhoneInput.css';

const countries = [
  { value: 'fr', label: '+33', image: frFlag },
  { value: 'es', label: '+34', image: esFlag },
  { value: 'gb', label: '+44', image: gbFlag },
  { value: 'de', label: '+49', image: deFlag },
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
    onChange({
      ...event,
      currentTarget: {
        value: `${country.label}${value}`,
      },
    });
  }

  renderSelectOption = option => (
    <option key={option.value} value={option.value}>
      {option.label}
    </option>
  );

  renderPhoneInputs = () => {
    const {
      // eslint-disable-next-line no-unused-vars
      error, mandatory, left, ...phoneInputProps
    } = this.props;
    const { country, phone } = this.state;

    return (
      <div className={s.phoneInput}>
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
          placeholder="06 07 08 09 00"
          type="text"
          onChange={this.onPhoneNumberChange}
          value={phone}
        />
      </div>
    );
  };

  render() {
    const {
      label, error, mandatory, left, className,
    } = this.props;

    return (
      <InputLabel
        error={error}
        label={label}
        left={left}
        mandatory={mandatory}
        InputComponent={this.renderPhoneInputs}
        className={className}
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
  className: '',
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
  className: PropTypes.string,
};

export default PhoneInput;
