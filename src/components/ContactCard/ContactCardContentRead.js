import React from 'react';
import PropTypes from 'prop-types';
import ContactType from './ContactType';
import s from './ContactCardContentRead.css';

const ContactCardContentRead = ({ contact, id }) => {
  const { email, phone } = contact;

  return (
    <div className={s.column} id={id}>
      <span className={s.text} id="contactEmail">{email}</span>
      <span className={s.text} id="contactPhone">{phone}</span>
    </div>
  );
};

ContactCardContentRead.propTypes = {
  contact: ContactType.isRequired,
  id: PropTypes.string.isRequired,
};

export default ContactCardContentRead;
