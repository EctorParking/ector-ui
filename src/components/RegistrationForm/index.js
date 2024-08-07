import React from 'react';
import PropTypes from 'prop-types';
import { Card, InputLabel, PhoneInput } from '..';
import s from './RegistrationForm.module.css';
import RegistrationFormTextTypes, {
  defaultTexts,
  ValuesType,
  ErrorsType,
  defaultValues,
  defaultErrors,
} from './RegistrationFormTextTypes';
import {
  CountryPropType,
  DefaultCountries,
} from '../PhoneInput/PhoneInputCountries';
import eyeClosedIcon from '../../assets/images/eyeClosed.svg';
import eyeOpenedIcon from '../../assets/images/eyeOpened.svg';

class RegistrationForm extends React.Component {
  constructor(props) {
    super(props);

    this.handleChangeFirstName = this.handleChangeProperty.bind(
      this,
      'firstName'
    );
    this.handleChangeLastName = this.handleChangeProperty.bind(
      this,
      'lastName'
    );
    this.handleChangeEmail = this.handleChangeProperty.bind(this, 'email');
    this.handleChangePhone = this.handleChangeProperty.bind(this, 'phone');
    this.handleChangePassword = this.handleChangeProperty.bind(
      this,
      'password'
    );
    this.handleChangePasswordConfirmation = this.handleChangeProperty.bind(
      this,
      'passwordConfirmation'
    );
    this.state = {
      hidePassword: true,
      hidePasswordConfirmation: true,
    };
  }

  handleChangeProperty(field, event) {
    const { onChangeProperty } = this.props;

    onChangeProperty(field, event.currentTarget.value);
  }

  renderLabelFooterPasswordComponent = () => {
    const { labelFooterPassword } = this.props;

    return labelFooterPassword ? (
      <div className={s.footerLabel}>{labelFooterPassword}</div>
    ) : null;
  };

  onClickEye = e => {
    const { hidePassword } = this.state;
    e.preventDefault();
    this.setState({ hidePassword: !hidePassword });
  };

  onClickEyeConfirmation = e => {
    const { hidePasswordConfirmation } = this.state;
    e.preventDefault();
    this.setState({ hidePasswordConfirmation: !hidePasswordConfirmation });
  };

  renderEyeButton = () => {
    const { hidePassword } = this.state;
    return (
      <button onClick={this.onClickEye} id="HidePasswordButton">
        <img
          width="20px"
          height="20px"
          alt="Eye"
          src={hidePassword ? eyeOpenedIcon : eyeClosedIcon}
        />
      </button>
    );
  };

  renderEyeButtonConfirmation = () => {
    const { hidePasswordConfirmation } = this.state;
    return (
      <button onClick={this.onClickEyeConfirmation} id="HidePasswordButton">
        <img
          width="20px"
          height="20px"
          alt="Eye"
          src={hidePasswordConfirmation ? eyeOpenedIcon : eyeClosedIcon}
        />
      </button>
    );
  };

  render() {
    const {
      RootComponent,
      className,
      contentClassName,
      texts,
      phoneWithFlags,
      values,
      errors,
      onKeyDownEmail,
      countries,
      leftColumnClassName,
      defaultCountry,
      ...cardProps
    } = this.props;

    const { hidePassword, hidePasswordConfirmation } = this.state;

    const actualCardProps = {
      ...cardProps,
      className: [s.card, className].join(' '),
      contentClassName: [s.contentCard, contentClassName].join(' '),
    };

    return (
      <RootComponent {...actualCardProps}>
        <form autoComplete="on">
          <div className={s.columns}>
            <div className={[s.leftColumn, leftColumnClassName].join(' ')}>
              <InputLabel
                id="registrationFormFirstNameInput"
                label={texts.firstName}
                onChange={this.handleChangeFirstName}
                value={values.firstName || ''}
                error={errors.firstName}
                mandatory
                autocomplete="on"
                name="given-name"
              />
              <InputLabel
                id="registrationFormLastNameInput"
                className={s.inputLabel}
                label={texts.lastName}
                onChange={this.handleChangeLastName}
                value={values.lastName || ''}
                error={errors.lastName}
                mandatory
                autocomplete="on"
                name="family-name"
              />
              <PhoneInput
                id="registrationFormPhoneInput"
                className={s.inputLabel}
                withFlag={phoneWithFlags}
                label={texts.phone}
                onChange={this.handleChangePhone}
                value={values.phone || ''}
                error={errors.phone}
                countries={countries}
                defaultCountry={defaultCountry}
                mandatory
                autocomplete="on"
                name="tel"
              />
            </div>
            <div>
              <InputLabel
                id="registrationFormEmailInput"
                className={s.emailInputLabel}
                label={texts.email}
                onChange={this.handleChangeEmail}
                value={values.email || ''}
                error={errors.email}
                onKeyDown={onKeyDownEmail}
                autocomplete="off"
                mandatory
              />
              <InputLabel
                id="registrationFormPasswordInput"
                className={s.inputLabel}
                label={texts.password}
                onChange={this.handleChangePassword}
                value={values.password || ''}
                error={errors.password}
                LabelFooterComponent={this.renderLabelFooterPasswordComponent}
                type={hidePassword ? 'password' : 'text'}
                mandatory
                RightComponent={this.renderEyeButton}
              />
              <InputLabel
                id="registrationFormPasswordConfirmationInput"
                className={s.inputLabel}
                label={texts.passwordConfirmation}
                onChange={this.handleChangePasswordConfirmation}
                value={values.passwordConfirmation || ''}
                error={errors.passwordConfirmation}
                type={hidePasswordConfirmation ? 'password' : 'text'}
                mandatory
                RightComponent={this.renderEyeButtonConfirmation}
              />
            </div>
          </div>
        </form>
      </RootComponent>
    );
  }
}

RegistrationForm.defaultProps = {
  // eslint-disable-next-line react/prop-types
  RootComponent: ({ children, ...cardProps }) => (
    <Card {...cardProps}>{children}</Card>
  ),
  className: undefined,
  contentClassName: undefined,
  leftColumnClassName: undefined,
  texts: defaultTexts,
  phoneWithFlags: false,
  onChangeProperty: () => {},
  values: defaultValues,
  errors: defaultErrors,
  onKeyDownEmail: () => {},
  labelFooterPassword: 'Minimum 8 caractères',
  countries: DefaultCountries,
  defaultCountry: null,
};

RegistrationForm.propTypes = {
  RootComponent: PropTypes.func,
  className: PropTypes.string,
  contentClassName: PropTypes.string,
  leftColumnClassName: PropTypes.string,
  texts: RegistrationFormTextTypes,
  phoneWithFlags: PropTypes.bool,
  onChangeProperty: PropTypes.func,
  values: ValuesType,
  errors: ErrorsType,
  labelFooterPassword: PropTypes.string,
  onKeyDownEmail: PropTypes.func,
  countries: PropTypes.shape(CountryPropType),
  defaultCountry: CountryPropType,
};

export default RegistrationForm;
