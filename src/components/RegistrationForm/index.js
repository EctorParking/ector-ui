import React from 'react';
import PropTypes from 'prop-types';
import { Card, InputLabel, RadioButton, PhoneInput } from '..';
import s from './RegistrationForm.css';
import RegistrationFormTextTypes, { defaultTexts, radioDefaultValues } from './RegistrationFormTextTypes';

const RegistrationForm = ({
  RootComponent, className, contentClassName, texts, radioValues, phoneWithFlags, ...cardProps
}) => (
  <RootComponent {...cardProps} className={[s.card, className].join(' ')} contentClassName={[s.contentCard, contentClassName].join(' ')}>
    <div className={s.columns}>
      <div className={s.leftColumn}>
        <div className={s.flex}>
          <RadioButton className={s.leftRadio} label={texts.firstChoice} value={radioValues.firstChoice} name="gender" />
          <RadioButton label={texts.secondChoice} value={radioValues.secondChoice} name="gender" />
        </div>
        <InputLabel className={s.inputLabel} label={texts.firstName} mandatory />
        <InputLabel className={s.inputLabel} label={texts.lastName} mandatory />
        <InputLabel className={s.inputLabel} label={texts.postalCode} />
      </div>
      <div>
        <PhoneInput withFlag={phoneWithFlags} label={texts.phone} mandatory />
        <InputLabel className={s.inputLabel} label={texts.email} />
        <InputLabel className={s.inputLabel} label={texts.password} />
        <InputLabel className={s.inputLabel} label={texts.confirmPassword} />
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
};

export default RegistrationForm;
