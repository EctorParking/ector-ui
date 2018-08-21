import React from 'react';
import PropTypes from 'prop-types';
import s from './ContactForm.css';
import TextsType, { DefaultTexts } from './ContactFormTextsType';
import { Card, Input, GenderPicker, LinkUnderlined, CardTitle } from '../';
import PhoneInput from '../PhoneInput';
import ContactFormField from './ContactFormField';

const genders = [
  { value: 'male', label: 'Mr' },
  { value: 'female', label: 'Mme' },
];

class ContactForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selected: false,
      values: {
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        postalCode: '',
      },
    };

    this.setSelected = this.setSelected.bind(this);
    this.setNotSelected = this.setNotSelected.bind(this);

    this.handleChangeGender = this.handleSelectGender.bind(this);
    this.handleChangeFirstName = this.handleChangeProperty.bind(this, 'firstname');
    this.handleChangeLastName = this.handleChangeProperty.bind(this, 'lastname');
    this.handleChangeEmail = this.handleChangeProperty.bind(this, 'email');
    this.handleChangePhone = this.handleChangeProperty.bind(this, 'phone');
    this.handleChangePostalCode = this.handleChangeProperty.bind(this, 'postalCode');
  }

  setSelected() {
    this.setState({ selected: true });
  }

  setNotSelected() {
    this.setState({ selected: false });
  }

  handleChangeProperty(field, event) {
    const { onChangeProperty } = this.props;

    this.setState({
      values: {
        ...this.state.values,
        [field]: event.currentTarget.value,
      },
    });
    onChangeProperty(field, event.currentTarget.value);
  }

  handleSelectGender(gender) {
    const { onChangeProperty } = this.props;

    this.setState({
      values: {
        ...this.state.values,
        gender,
      },
    });
    onChangeProperty('gender', gender);
  }

  render() {
    const { texts } = this.props;
    const { selected, values } = this.state;
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
                genders={genders}
                onSelect={this.handleChangeGender}
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
                onFocus={this.setSelected}
                onBlur={this.setNotSelected}
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
                onFocus={this.setSelected}
                onBlur={this.setNotSelected}
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
                onFocus={this.setSelected}
                onBlur={this.setNotSelected}
                onChange={this.handleChangeEmail}
                value={values.email}
              />
            </ContactFormField>
            <ContactFormField
              label={phone}
              mandatory
            >
              <PhoneInput
                onFocus={this.setSelected}
                onBlur={this.setNotSelected}
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
                  onFocus={this.setSelected}
                  onBlur={this.setNotSelected}
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
};

ContactForm.propTypes = {
  texts: TextsType,
  onChangeProperty: PropTypes.func,
};

export default ContactForm;
