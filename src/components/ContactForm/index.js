import React from 'react';
import PropTypes from 'prop-types';
import s from './ContactForm.css';
import TextsType, { DefaultTexts } from './ContactFormTextsType';
import {
  Card, GenderPicker, LinkUnderlined, CardTitle, InputLabel, PhoneInput,
} from '..';
import { CountryPropType } from '../PhoneInput/PhoneInputCountries';

class ContactForm extends React.Component {
  constructor(props) {
    super(props);

    this.handleChangeGender = props.onChangeProperty.bind(this, 'title');
    this.handleChangeFirstName = this.handleChangeProperty.bind(this, 'firstName');
    this.handleChangeLastName = this.handleChangeProperty.bind(this, 'lastName');
    this.handleChangeEmail = this.handleChangeProperty.bind(this, 'email');
    this.handleChangePhone = this.handleChangeProperty.bind(this, 'phone');
    this.handleChangePostalCode = this.handleChangeProperty.bind(this, 'postalCode');

    this.renderFirstNameInput = this.renderInputComponent.bind(this, 'firstName');
    this.renderLastNameInput = this.renderInputComponent.bind(this, 'lastName');
    this.renderEmailInput = this.renderInputComponent.bind(this, 'email');
    this.renderPostalCodeInput = this.renderInputComponent.bind(this, 'postalCode');
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

  renderInputComponent(inputName) {
    const { renderInput } = this.props;

    return renderInput(inputName);
  }

  renderGenderPicker = () => {
    const { values: { title } } = this.props;

    return (
      <GenderPicker
        genders={this.genders}
        onSelect={this.handleChangeGender}
        selected={title || ''}
        className={s.genderPickerInputs}
      />
    );
  };

  renderFooter = (footerProps) => {
    const { FooterComponent, texts, onSubmit } = this.props;

    if (FooterComponent === null) {
      return null;
    } if (typeof FooterComponent === 'function' && FooterComponent(footerProps)) {
      return FooterComponent(footerProps);
    }
    return (
      <div className={[s.footer, footerProps.className].join(' ')}>
        <LinkUnderlined onClick={onSubmit}>{texts.addDriver}</LinkUnderlined>
      </div>
    );
  };

  render() {
    const {
      texts,
      values,
      selected,
      onInputBlur,
      onInputFocus,
      errors,
      labelPosition,
      countries,
      contentClassName,
      firstSectionClassName,
      secondSectionClassName,
      withCountryFlag,
      RootComponent,
      ...cardProps
    } = this.props;
    const {
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

    return (
      <RootComponent
        {...cardProps}
        isSelected={selected}
        FooterComponent={this.renderFooter}
      >
        <CardTitle className={!newDriver ? s.hidden : ''}>{newDriver}</CardTitle>

        <div className={[s.columns, contentClassName].join(' ')}>
          <div className={[s.firstSection, firstSectionClassName].join(' ')}>
            <InputLabel
              label={civility}
              left={labelPosition === 'left'}
              InputComponent={this.renderGenderPicker}
              className={[labelPosition === 'left' ? s.leftGenderPickerField : s.topGenderPickerField, s.contactFormInput].join(' ')}
            />
            <InputLabel
              left={labelPosition === 'left'}
              type="text"
              name="firstName"
              id="first-name"
              placeholder={firstNamePlaceholder}
              onFocus={onInputFocus}
              onBlur={onInputBlur}
              onChange={this.handleChangeFirstName}
              value={values.firstName || ''}
              error={errors.firstName}
              label={firstName}
              mandatory
              className={s.contactFormInput}
              InputComponent={this.renderFirstNameInput}
            />
            <InputLabel
              left={labelPosition === 'left'}
              label={lastName}
              mandatory
              name="lastName"
              type="text"
              id="last-name"
              placeholder={lastNamePlaceholder}
              onFocus={onInputFocus}
              onBlur={onInputBlur}
              onChange={this.handleChangeLastName}
              value={values.lastName || ''}
              error={errors.lastName}
              className={s.contactFormInput}
              InputComponent={this.renderLastNameInput}
            />
          </div>
          <div className={[s.secondSection, secondSectionClassName].join(' ')}>
            <InputLabel
              left={labelPosition === 'left'}
              label={email}
              mandatory
              name="email"
              type="email"
              id="email"
              placeholder={emailPlaceholder}
              onFocus={onInputFocus}
              onBlur={onInputBlur}
              onChange={this.handleChangeEmail}
              value={values.email || ''}
              error={errors.email}
              className={s.contactFormInput}
              InputComponent={this.renderEmailInput}
            />
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
              inputClassName={s.phoneInput}
              countries={countries}
              id="phone-number"
              name="phoneNumber"
              withFlag={withCountryFlag}
            />
            <InputLabel
              left={labelPosition === 'left'}
              label={postCode}
              type="text"
              id="postal-code"
              name="postalCode"
              placeholder={postCodePlaceholder}
              onFocus={onInputFocus}
              onBlur={onInputBlur}
              onChange={this.handleChangePostalCode}
              value={values.postalCode || ''}
              error={errors.postalCode}
              className={s.contactFormInput}
              inputClassName={s.postalCodeInput}
              InputComponent={this.renderPostalCodeInput}
            />
          </div>
        </div>
      </RootComponent>
    );
  }
}

ContactForm.defaultProps = {
  texts: DefaultTexts,
  onChangeProperty: () => {},
  values: {
    gender: null,
    firstName: null,
    lastName: null,
    email: null,
    phone: null,
    postalCode: null,
  },
  errors: {
    gender: null,
    firstName: null,
    lastName: null,
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
  contentClassName: '',
  firstSectionClassName: '',
  secondSectionClassName: '',
  withCountryFlag: true,
  renderInput: () => null,
  FooterComponent: () => null,
  // eslint-disable-next-line react/prop-types
  RootComponent: ({ children, ...cardProps }) => (<Card {...cardProps}>{children}</Card>),
};

ContactForm.propTypes = {
  texts: TextsType,
  onChangeProperty: PropTypes.func,
  values: PropTypes.shape({
    title: PropTypes.oneOf(['male', 'female', null, '']),
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    email: PropTypes.string,
    phoneNumber: PropTypes.string,
    postalCode: PropTypes.string,
  }),
  errors: PropTypes.shape({
    title: PropTypes.string,
    firstName: PropTypes.string,
    lastName: PropTypes.string,
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
  contentClassName: PropTypes.string,
  firstSectionClassName: PropTypes.string,
  secondSectionClassName: PropTypes.string,
  withCountryFlag: PropTypes.bool,
  renderInput: PropTypes.func,
  FooterComponent: PropTypes.func,
  RootComponent: PropTypes.func,
};

export default ContactForm;
