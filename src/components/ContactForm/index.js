import React from 'react';
import PropTypes from 'prop-types';
import s from './ContactForm.css';
import TextsType, { DefaultTexts } from './ContactFormTextsType';
import { Card, Input, GenderPicker, LinkUnderlined, CardTitle } from '../';
import PhoneInput from '../PhoneInput';
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
      texts, values, selected, onInputBlur, onInputFocus,
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
      notMandatory,
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
      >
        <CardTitle>{newDriver}</CardTitle>

        <div className={s.columns}>
          <div>
            <ContactFormField label={civility}>
              <GenderPicker
                genders={this.genders}
                onSelect={this.handleChangeGender}
                selected={values.gender}
              />
            </ContactFormField>
            <ContactFormField
              label={firstName}
              mandatory
            >
              <Input
                inputType="text"
                inputId="first-name"
                inputPlaceHolder={firstNamePlaceholder}
                onFocus={onInputFocus}
                onBlur={onInputBlur}
                onChange={this.handleChangeFirstName}
                value={values.firstName}
              />
            </ContactFormField>
            <ContactFormField
              label={lastName}
              mandatory
            >
              <Input
                inputType="text"
                inputId="last-name"
                inputPlaceHolder={lastNamePlaceholder}
                onFocus={onInputFocus}
                onBlur={onInputBlur}
                onChange={this.handleChangeLastName}
                value={values.lastName}
              />
            </ContactFormField>
          </div>
          <div>
            <ContactFormField
              label={email}
              mandatory
            >
              <Input
                inputType="email"
                inputId="email"
                inputPlaceHolder={emailPlaceholder}
                onFocus={onInputFocus}
                onBlur={onInputBlur}
                onChange={this.handleChangeEmail}
                value={values.email}
              />
            </ContactFormField>
            <ContactFormField
              label={phone}
              mandatory
            >
              <PhoneInput
                onFocus={onInputFocus}
                onBlur={onInputBlur}
                onChange={this.handleChangePhone}
              />
            </ContactFormField>
            <ContactFormField
              label={postCode}
            >
              <div className={s.postCode}>
                <Input
                  type="text"
                  inputId="postCode"
                  inputPlaceHolder={postCodePlaceholder}
                  onFocus={onInputFocus}
                  onBlur={onInputBlur}
                  onChange={this.handleChangePostalCode}
                  value={values.postalCode}
                />
              </div>

              <span>{notMandatory}</span>
            </ContactFormField>
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
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    postalCode: '',
  },
  onInputFocus: () => {},
  onInputBlur: () => {},
  selected: false,
};

ContactForm.propTypes = {
  texts: TextsType,
  onChangeProperty: PropTypes.func,
  values: PropTypes.shape({
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    email: PropTypes.string,
    phoneNumber: PropTypes.string,
    postalCode: PropTypes.string,
  }),
  onInputFocus: PropTypes.func,
  onInputBlur: PropTypes.func,
  selected: PropTypes.bool,
};

export default ContactForm;
