import React from 'react';
import PropTypes from 'prop-types';
import Select from '../Select';
import Input from '../Input';
import ukFlag from '../../images/flags/uk.png';
import frFlag from '../../images/flags/fr.png';

import s from './PhoneInput.css';

const values = [
  { value: 'fr', label: '+33', image: frFlag },
  { value: 'uk', label: '+44', image: ukFlag },
];

class PhoneInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      country: values[0],
      phone: '',
    };

    this.onCountryCodeChange = this.onCountryCodeChange.bind(this);
    this.onPhoneNumberChange = this.onPhoneNumberChange.bind(this);
  }

  onCountryCodeChange(event) {
    const { currentTarget: { value: countryCode } } = event;
    const country = values.find(option => option.value === countryCode);

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

  render() {
    const { ...inputProps } = this.props;
    const { country, phone } = this.state;

    return (
      <div className={s.phoneInput}>
        <Select
          options={values}
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
          {...inputProps}
          inputPlaceHolder="06 07 08 09 00"
          inputType="text"
          onChange={this.onPhoneNumberChange}
          value={phone}
        />
      </div>
    );
  }
}

PhoneInput.defaultProps = {
  onChange: () => {},
  onFocus: () => {},
  onBlur: () => {},
};

PhoneInput.propTypes = {
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
};


export default PhoneInput;
