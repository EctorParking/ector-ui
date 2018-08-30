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
      countryCode: 'fr',
      phone: '',
    };

    this.onCountryCodeChange = this.onCountryCodeChange.bind(this);
    this.onPhoneNumberChange = this.onPhoneNumberChange.bind(this);
  }

  onCountryCodeChange(countryCode) {
    this.setState({ countryCode });
  }

  onPhoneNumberChange(event) {
    const { onChange } = this.props;
    const { countryCode } = this.state;
    const { currentTarget: { value } } = event;
    const foundedCountry = values.find(country => country.value === countryCode);

    this.setState({ phone: value });
    if (foundedCountry) {
      onChange(event, `${foundedCountry.label}${value}`);
    }
  }

  render() {
    const { ...inputProps } = this.props;
    const { countryCode, phone } = this.state;

    return (
      <div className={s.phoneInput}>
        <Select
          values={values}
          selected={countryCode}
          hasImage
          onChange={this.onCountryCodeChange}
        />
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
