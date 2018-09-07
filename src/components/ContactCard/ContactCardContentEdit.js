import React from 'react';
import PropTypes from 'prop-types';
import { ContactFormValuesType } from './ContactType';
import Input from '../Input';
import s from './ContactCardContentEdit.css';

const ContactCardContentEdit = ({ onChangeEmail, onChangePhoneNumber, values }) => (
  <div className={s.column}>
    <Input inputType="text" value={values.email} onChange={onChangeEmail} />
    <Input inputType="text" value={values.phone} onChange={onChangePhoneNumber} />
  </div>
);

ContactCardContentEdit.propTypes = {
  onChangeEmail: PropTypes.func.isRequired,
  onChangePhoneNumber: PropTypes.func.isRequired,
  values: ContactFormValuesType.isRequired,
};

export default ContactCardContentEdit;
