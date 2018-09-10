import React from 'react';
import ContactType from './ContactType';
import s from './ContactCardContentRead.css';

const ContactCardContentRead = ({ contact }) => {
  const { email, phone } = contact;

  return (
    <div className={s.column}>
      <span className={s.text}>{email}</span>
      <span className={s.text}>{phone}</span>
    </div>
  );
};

ContactCardContentRead.propTypes = {
  contact: ContactType.isRequired,
};

export default ContactCardContentRead;
