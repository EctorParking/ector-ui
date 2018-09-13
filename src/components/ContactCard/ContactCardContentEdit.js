import React from 'react';
import PropTypes from 'prop-types';
import { ContactFormValuesType, ContactFormErrorsType } from './ContactType';
import { InputLabel } from '../';
import s from './ContactCardContentEdit.css';

const ContactCardContentEdit = ({
  onChangeEmail, onChangePhoneNumber, values, errors,
}) => (
  <div className={s.column}>
    <InputLabel label="" type="text" value={values.email} onChange={onChangeEmail} error={errors.email} />
    <InputLabel label="" type="text" value={values.phone} onChange={onChangePhoneNumber} error={errors.phone} />
  </div>
);

ContactCardContentEdit.propTypes = {
  onChangeEmail: PropTypes.func.isRequired,
  onChangePhoneNumber: PropTypes.func.isRequired,
  values: ContactFormValuesType.isRequired,
  errors: ContactFormErrorsType.isRequired,
};

export default ContactCardContentEdit;
