import React from 'react';
import PropTypes from 'prop-types';
import { Select, InputLabel, Input } from '../';
import { DefaultCountries, CountryPropType } from './PhoneInputCountries';
import s from './PhoneInput.css';

class PhoneInput extends React.Component {
  constructor(props) {
    super(props);
    const { value } = props;

    this.state = this.getCountryAndPhoneFromValue(value);
    this.onCountryCodeChange = this.onCountryCodeChange.bind(this);
    this.onPhoneNumberChange = this.onPhoneNumberChange.bind(this);
  }

  componentWillReceiveProps(newProps) {
    const { phone, country } = this.state;
    const { value: nextValue } = newProps;

    if (nextValue !== `${country.label}${phone}`) {
      this.setState(this.getCountryAndPhoneFromValue(nextValue));
    }
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

    onChange({
      ...event,
      currentTarget: {
        value: `${country.label}${value}`,
      },
    });
    this.setState({ phone: value });
  }

  getCountryAndPhoneFromValue(value) {
    const { countries } = this.props;
    const country = countries.find(c => value.startsWith(c.label));
    let phone = '';
    let countryCode; // eslint-disable-line no-unused-vars

    if (country) {
      [countryCode, phone] = value.split(country.label);
      return {
        country,
        phone,
      };
    }
    return {
      country: countries[0],
      phone,
    };
  }

  renderSelectOption = option => (
    <option key={option.value} value={option.value}>
      {option.label}
    </option>
  );

  renderPhoneInputs = () => {
    const {
      // eslint-disable-next-line no-unused-vars
      error, mandatory, left, countries, withFlag, ...phoneInputProps
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
          {withFlag && (<img
            src={country.image}
            className={s.selectImage}
            alt={country.label}
          />
          )}
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
  countries: DefaultCountries,
  withFlag: true,
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
  withFlag: PropTypes.bool,
};

export default PhoneInput;
