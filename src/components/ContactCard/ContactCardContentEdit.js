import React from 'react';
import ContactType from './ContactType';
import Input from '../Input';
import s from './ContactCardContentEdit.css';

const ContactCardContentEdit = ({ contact }) => {
  const { email, phoneNumber } = contact;

  return (
    <div className={s.column}>
      <Input type="text" defaultValue={email} />
      <Input type="text" defaultValue={phoneNumber} />
    </div>
  );
};

ContactCardContentEdit.propTypes = {
  contact: ContactType.isRequired,
};

export default ContactCardContentEdit;
