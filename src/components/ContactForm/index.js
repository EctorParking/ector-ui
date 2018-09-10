import React from 'react';
import PropTypes from 'prop-types';
import s from './ContactForm.css';
import TextsType, { DefaultTexts } from './ContactFormTextsType';
import { Card, GenderPicker, LinkUnderlined, CardTitle, InputLabel, PhoneInput } from '../';
import ContactFormField from './ContactFormField';

class ContactForm extends React.Component {
  constructor(props) {
    super(props);

    this.handleChangeGender = props.onChangeProperty.bind(this, 'gender');
    this.handleChangeFirstName = this.handleChangeProperty.bind(this, 'firstname');
    this.handleChangeLastName = this.handleChangeProperty.bind(this, 'lastname');
    this.handleChangeEmail = this.handleChangeProperty.bind(this, 'email');
    this.handleChangePhone = this.handleChangeProperty.bind(this, 'phone');
    this.handleChangePostalCode = this.handleChangeProperty.bind(this, 'postalCode');
    this.genders = [{
      value: 'male',
      label: props.texts.male,
    }, {
      value: 'female',
      label: props.texts.female,
    }];
  }

  handleChangeProperty(field, event) {
    const { onChangeProperty } = this.props;

    onChangeProperty(field, event.currentTarget.value);
  }

  render() {
    const {
      texts, values, selected, onInputBlur, onInputFocus, errors, ...cardProps
    } = this.props;
    const {
      addDriver,
      newDriver,
      civility,
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
        <LinkUnderlined>{addDriver}</LinkUnderlined>
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
            <ContactFormField label={civility}>
              <GenderPicker
                genders={this.genders}
                onSelect={this.handleChangeGender}
                selected={values.gender || ''}
              />
            </ContactFormField>
            <InputLabel
              left
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
            />
            <InputLabel
              left
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
            />
          </div>
          <div>
            <InputLabel
              left
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
            />
            <PhoneInput
              label={phone}
              mandatory
              left
              onFocus={onInputFocus}
              onBlur={onInputBlur}
              onChange={this.handleChangePhone}
              error={errors.phone}
              value={values.phone || ''}
            />
            <InputLabel
              left
              label={postCode}
              type="text"
              id="postCode"
              placeholder={postCodePlaceholder}
              onFocus={onInputFocus}
              onBlur={onInputBlur}
              onChange={this.handleChangePostalCode}
              value={values.postalCode || ''}
              error={errors.postalCode}
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
    gender: null,
    firstname: null,
    lastname: null,
    email: null,
    phone: null,
    postalCode: null,
  },
  errors: {
    gender: null,
    firstname: null,
    lastname: null,
    email: null,
    phone: null,
    postalCode: null,
  },
  onInputFocus: () => {},
  onInputBlur: () => {},
  selected: false,
};

ContactForm.propTypes = {
  texts: TextsType,
  onChangeProperty: PropTypes.func,
  values: PropTypes.shape({
    gender: PropTypes.oneOf(['male', 'female']),
    firstname: PropTypes.string,
    lastname: PropTypes.string,
    email: PropTypes.string,
    phoneNumber: PropTypes.string,
    postalCode: PropTypes.string,
  }),
  errors: PropTypes.shape({
    gender: PropTypes.string,
    firstname: PropTypes.string,
    lastname: PropTypes.string,
    email: PropTypes.string,
    phoneNumber: PropTypes.string,
    postalCode: PropTypes.string,
  }),
  onInputFocus: PropTypes.func,
  onInputBlur: PropTypes.func,
  selected: PropTypes.bool,
};

export default ContactForm;
