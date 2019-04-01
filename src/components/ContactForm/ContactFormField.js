import React from 'react';
import PropTypes from 'prop-types';
import s from './ContactFormField.module.css';

const ContactFormField = ({ children, label, mandatory }) => (
  <label
    htmlFor="civility"
    className={`${s.field} ${mandatory ? s.mandatory : ''}`}
  >
    <span className={s.label}>
      {label}
    </span>

    {children}
  </label>
);

ContactFormField.defaultProps = {
  mandatory: false,
};

ContactFormField.propTypes = {
  children: PropTypes.node.isRequired,
  label: PropTypes.string.isRequired,
  mandatory: PropTypes.bool,
};

export default ContactFormField;
