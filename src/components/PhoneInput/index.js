import React from 'react';
import PropTypes from 'prop-types';
import { Select, InputLabel, Input } from '../';
import { DefaultCountries, CountryPropType } from './PhoneInputCountries';
import s from './PhoneInput.css';

class PhoneInput extends React.Component {
  constructor(props) {
    super(props);
    const { value, countries } = props;
    let country;

    if (value && value !== PhoneInput.defaultProps.value) {
      country = countries.find(c => value.startsWith(c.label));
    }
    this.state = {
      country: country || countries[0],
    };

    this.onCountryCodeChange = this.onCountryCodeChange.bind(this);
    this.onPhoneNumberChange = this.onPhoneNumberChange.bind(this);
  }

  onCountryCodeChange(event) {
    const { currentTarget: { value: countryCode } } = event;
    const { countries } = this.props;
    const country = countries.find(option => option.value === countryCode);

    this.setState({ country });
  }

  onPhoneNumberChange(event) {
    const { onChange } = this.props;
    const { country } = this.state;
    const { currentTarget: { value } } = event;

    event.preventDefault();
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
      error, mandatory, left, countries, ...phoneInputProps
    } = this.props;
    const { country } = this.state;

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
  countries: DefaultCountries,
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
  countries: PropTypes.shape(CountryPropType),
};

export default PhoneInput;
