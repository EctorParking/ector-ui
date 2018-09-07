import React from 'react';
import PropTypes from 'prop-types';
import { ContactFormValuesType, ContactFormErrorsType } from './ContactType';
import Input from '../Input';
import s from './ContactCardContentEdit.css';

const ContactCardContentEdit = ({
  onChangeEmail, onChangePhoneNumber, values, errors,
}) => (
  <div className={s.column}>
    <Input inputType="text" value={values.email} onChange={onChangeEmail} hasError={!!errors.email && errors.email.length > 0} />
    <Input inputType="text" value={values.phone} onChange={onChangePhoneNumber} hasError={!!errors.phone && errors.phone.length > 0} />
  </div>
);

ContactCardContentEdit.propTypes = {
  onChangeEmail: PropTypes.func.isRequired,
  onChangePhoneNumber: PropTypes.func.isRequired,
  values: ContactFormValuesType.isRequired,
  errors: ContactFormErrorsType.isRequired,
};

export default ContactCardContentEdit;
