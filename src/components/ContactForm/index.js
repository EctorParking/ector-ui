import React from 'react';
import PropTypes from 'prop-types';
import s from './ContactForm.css';
import TextsType, { DefaultTexts } from './ContactFormTextsType';
import { Card, LinkUnderlined, CardTitle, InputLabel, PhoneInput } from '../';
import { CountryPropType } from '../PhoneInput/PhoneInputCountries';

class ContactForm extends React.Component {
  constructor(props) {
    super(props);

    this.handleChangeFirstName = this.handleChangeProperty.bind(this, 'firstname');
    this.handleChangeLastName = this.handleChangeProperty.bind(this, 'lastname');
    this.handleChangeEmail = this.handleChangeProperty.bind(this, 'email');
    this.handleChangePhone = this.handleChangeProperty.bind(this, 'phone');
    this.handleChangePostalCode = this.handleChangeProperty.bind(this, 'postalCode');
  }

  handleChangeProperty(field, event) {
    const { onChangeProperty } = this.props;

    onChangeProperty(field, event.currentTarget.value);
  }

  render() {
    const {
      texts,
      values,
      selected,
      onInputBlur,
      onInputFocus,
      errors,
      labelPosition,
      onSubmit,
      countries,
      ...cardProps
    } = this.props;
    const {
      addDriver,
      newDriver,
      firstName,
      firstNamePlaceholder,
      lastName,
      lastNamePlaceholder,
      email,
      emailPlaceholder,
      phone,
      postCode,
      postCodePlaceholder,
    } = texts;

    const footer = (
      <div className={s.footer}>
        <LinkUnderlined onClick={onSubmit}>{addDriver}</LinkUnderlined>
      </div>
    );

    return (
      <Card
        FooterChildren={footer}
        isSelected={selected}
        {...cardProps}
      >
        <CardTitle>{newDriver}</CardTitle>

        <div className={s.columns}>
          <div>
            <InputLabel
              left={labelPosition === 'left'}
              type="text"
              id="first-name"
              placeholder={firstNamePlaceholder}
              onFocus={onInputFocus}
              onBlur={onInputBlur}
              onChange={this.handleChangeFirstName}
              value={values.firstname || ''}
              error={errors.firstname}
              label={firstName}
              mandatory
              className={s.contactFormInput}
            />
            <InputLabel
              left={labelPosition === 'left'}
              label={lastName}
              mandatory
              type="text"
              id="last-name"
              placeholder={lastNamePlaceholder}
              onFocus={onInputFocus}
              onBlur={onInputBlur}
              onChange={this.handleChangeLastName}
              value={values.lastname || ''}
              error={errors.lastname}
              className={s.contactFormInput}
            />
            <InputLabel
              left={labelPosition === 'left'}
              label={email}
              mandatory
              type="email"
              id="email"
              placeholder={emailPlaceholder}
              onFocus={onInputFocus}
              onBlur={onInputBlur}
              onChange={this.handleChangeEmail}
              value={values.email || ''}
              error={errors.email}
              className={s.contactFormInput}
            />
          </div>
          <div>
            <PhoneInput
              label={phone}
              mandatory
              left={labelPosition === 'left'}
              onFocus={onInputFocus}
              onBlur={onInputBlur}
              onChange={this.handleChangePhone}
              error={errors.phone}
              value={values.phone || ''}
              className={s.contactFormInput}
              countries={countries}
              id="phone-number"
            />
            <InputLabel
              left={labelPosition === 'left'}
              label={postCode}
              type="text"
              id="postal-code"
              placeholder={postCodePlaceholder}
              onFocus={onInputFocus}
              onBlur={onInputBlur}
              onChange={this.handleChangePostalCode}
              value={values.postalCode || ''}
              error={errors.postalCode}
              className={s.contactFormInput}
              inputClassName={s.postalCodeInput}
            />

          </div>
        </div>
      </Card>
    );
  }
}

ContactForm.defaultProps = {
  texts: DefaultTexts,
  onChangeProperty: () => {},
  values: {
    firstname: null,
    lastname: null,
    email: null,
    phone: null,
    postalCode: null,
  },
  errors: {
    firstname: null,
    lastname: null,
    email: null,
    phone: null,
    postalCode: null,
  },
  onInputFocus: () => {},
  onInputBlur: () => {},
  selected: false,
  labelPosition: 'left',
  onSubmit: () => {},
  countries: undefined,
};

ContactForm.propTypes = {
  texts: TextsType,
  onChangeProperty: PropTypes.func,
  values: PropTypes.shape({
    firstname: PropTypes.string,
    lastname: PropTypes.string,
    email: PropTypes.string,
    phoneNumber: PropTypes.string,
    postalCode: PropTypes.string,
  }),
  errors: PropTypes.shape({
    firstname: PropTypes.string,
    lastname: PropTypes.string,
    email: PropTypes.string,
    phoneNumber: PropTypes.string,
    postalCode: PropTypes.string,
  }),
  onInputFocus: PropTypes.func,
  onInputBlur: PropTypes.func,
  selected: PropTypes.bool,
  labelPosition: PropTypes.oneOf(['top', 'left']),
  onSubmit: PropTypes.func,
  countries: PropTypes.arrayOf(CountryPropType),
};

export default ContactForm;
