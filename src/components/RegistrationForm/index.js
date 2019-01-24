import React from 'react';
import PropTypes from 'prop-types';
import { Card, InputLabel, GenderPicker, PhoneInput } from '..';
import s from './RegistrationForm.css';
import RegistrationFormTextTypes, {
  defaultTexts,
  radioDefaultValues,
  OnChangesRegistrationFormType,
  defaultOnChanges,
  ValuesType,
  ErrorsType,
  defaultValue,
  defaultErrors,
} from './RegistrationFormTextTypes';

const RegistrationForm = ({
  RootComponent, className, contentClassName,
  texts, radioValues, phoneWithFlags, onChanges, values, errors, ...cardProps
}) => (
  <RootComponent {...cardProps} className={[s.card, className].join(' ')} contentClassName={[s.contentCard, contentClassName].join(' ')}>
    <div className={s.columns}>
      <div className={s.leftColumn}>
        <div className={s.titleRadio}>
          <label htmlFor="title">{texts.title}</label>
          <GenderPicker
            className={s.genderPicker}
            genders={[
              { label: texts.male, value: radioValues.male },
              { label: texts.female, value: radioValues.female },
            ]}
            onSelect={onChanges.gender}
            selected={values.title}
            error={errors.title}
          />
        </div>
        <InputLabel
          className={s.inputLabel}
          label={texts.firstName}
          onChange={onChanges.firstName}
          value={values.firstName}
          error={errors.firstName}
          mandatory
        />
        <InputLabel
          className={s.inputLabel}
          label={texts.lastName}
          onChange={onChanges.lastName}
          value={values.lastName}
          error={errors.lastName}
          mandatory
        />
        <InputLabel
          className={s.inputLabel}
          label={texts.postalCode}
          onChange={onChanges.postalCode}
          value={values.postalCode}
          error={errors.postalCode}
        />
      </div>
      <div>
        <PhoneInput
          withFlag={phoneWithFlags}
          label={texts.phone}
          onChange={onChanges.phone}
          mandatory
        />
        <InputLabel
          className={s.inputLabel}
          label={texts.email}
          onChange={onChanges.email}
          value={values.email}
          error={errors.email}
          mandatory
        />
        <InputLabel
          className={s.inputLabel}
          label={texts.password}
          onChange={onChanges.password}
          value={values.password}
          error={errors.password}
          type="password"
          mandatory
        />
        <InputLabel
          className={s.inputLabel}
          label={texts.passwordConfirmation}
          onChange={onChanges.passwordConfirmation}
          value={values.passwordConfirmation}
          error={errors.passwordConfirmation}
          type="password"
          mandatory
        />
      </div>
    </div>
  </RootComponent>);

RegistrationForm.defaultProps = {
  // eslint-disable-next-line react/prop-types
  RootComponent: ({ children, ...cardProps }) => (<Card {...cardProps}>{children}</Card>),
  className: undefined,
  contentClassName: undefined,
  texts: defaultTexts,
  radioValues: radioDefaultValues,
  phoneWithFlags: false,
  onChanges: defaultOnChanges,
  values: defaultValue,
  errors: defaultErrors,
};

RegistrationForm.propTypes = {
  RootComponent: PropTypes.func,
  className: PropTypes.string,
  contentClassName: PropTypes.string,
  texts: RegistrationFormTextTypes,
  radioValues: PropTypes.shape({
    firstChoice: PropTypes.string,
  }),
  phoneWithFlags: PropTypes.bool,
  onChanges: OnChangesRegistrationFormType,
  values: ValuesType,
  errors: ErrorsType,
};

export default RegistrationForm;
