import React from 'react';
import PropTypes from 'prop-types';
import { Card, InputLabel, GenderPicker, PhoneInput } from '..';
import s from './RegistrationForm.css';
import RegistrationFormTextTypes, {
  defaultTexts,
  radioDefaultValues,
  ValuesType,
  ErrorsType,
  defaultValues,
  defaultErrors,
} from './RegistrationFormTextTypes';

class RegistrationForm extends React.Component {
  constructor(props) {
    super(props);

    this.handleChangeGender = props.onChangeProperty.bind(this, 'title');
    this.handleChangeFirstName = this.handleChangeProperty.bind(this, 'firstName');
    this.handleChangeLastName = this.handleChangeProperty.bind(this, 'lastName');
    this.handleChangeEmail = this.handleChangeProperty.bind(this, 'email');
    this.handleChangePhone = this.handleChangeProperty.bind(this, 'phone');
    this.handleChangePostalCode = this.handleChangeProperty.bind(this, 'postalCode');
    this.handleChangePassword = this.handleChangeProperty.bind(this, 'password');
    this.handleChangePasswordConfirmation = this.handleChangeProperty.bind(this, 'passwordConfirmation');

    this.genders = [{
      value: 'male',
      label: radioDefaultValues.male,
    }, {
      value: 'female',
      label: radioDefaultValues.female,
    }];
  }

  handleChangeProperty(field, event) {
    const { onChangeProperty } = this.props;

    onChangeProperty(field, event.currentTarget.value);
  }

  render() {
    const {
      RootComponent, className, contentClassName,
      texts, phoneWithFlags, values, errors, ...cardProps
    } = this.props;

    return (
      <RootComponent {...cardProps} className={[s.card, className].join(' ')} contentClassName={[s.contentCard, contentClassName].join(' ')}>
        <div className={s.columns}>
          <div className={s.leftColumn}>
            <div className={s.titleRadio}>
              <label htmlFor="title">{texts.title}</label>
              <GenderPicker
                className={s.genderPicker}
                genders={this.genders}
                onSelect={this.handleChangeGender}
                selected={values.title || ''}
                error={errors.title}
              />
            </div>
            <InputLabel
              className={s.inputLabel}
              label={texts.firstName}
              onChange={this.handleChangeFirstName}
              value={values.firstName || ''}
              error={errors.firstName}
              mandatory
            />
            <InputLabel
              className={s.inputLabel}
              label={texts.lastName}
              onChange={this.handleChangeLastName}
              value={values.lastName || ''}
              error={errors.lastName}
              mandatory
            />
            <InputLabel
              className={s.inputLabel}
              label={texts.postalCode}
              onChange={this.handleChangePostalCode}
              value={values.postalCode || ''}
              error={errors.postalCode}
            />
          </div>
          <div>
            <PhoneInput
              withFlag={phoneWithFlags}
              label={texts.phone}
              onChange={this.handleChangePhone}
              value={values.phone || ''}
              error={errors.phone}
              mandatory
            />
            <InputLabel
              className={s.inputLabel}
              label={texts.email}
              onChange={this.handleChangeEmail}
              value={values.email || ''}
              error={errors.email}
              mandatory
            />
            <InputLabel
              className={s.inputLabel}
              label={texts.password}
              onChange={this.handleChangePassword}
              value={values.password || ''}
              error={errors.password}
              type="password"
              mandatory
            />
            <InputLabel
              className={s.inputLabel}
              label={texts.passwordConfirmation}
              onChange={this.handleChangePasswordConfirmation}
              value={values.passwordConfirmation || ''}
              error={errors.passwordConfirmation}
              type="password"
              mandatory
            />
          </div>
        </div>
      </RootComponent>);
  }
}

RegistrationForm.defaultProps = {
  // eslint-disable-next-line react/prop-types
  RootComponent: ({ children, ...cardProps }) => (<Card {...cardProps}>{children}</Card>),
  className: undefined,
  contentClassName: undefined,
  texts: defaultTexts,
  phoneWithFlags: false,
  onChangeProperty: () => {},
  values: defaultValues,
  errors: defaultErrors,
};

RegistrationForm.propTypes = {
  RootComponent: PropTypes.func,
  className: PropTypes.string,
  contentClassName: PropTypes.string,
  texts: RegistrationFormTextTypes,
  phoneWithFlags: PropTypes.bool,
  onChangeProperty: PropTypes.func,
  values: ValuesType,
  errors: ErrorsType,
};

export default RegistrationForm;
