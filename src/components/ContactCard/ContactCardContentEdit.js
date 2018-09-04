import React from 'react';
import ContactType from './ContactType';
import Input from '../Input';
import s from './ContactCardContentEdit.css';

const ContactCardContentEdit = ({ contact }) => {
  const { email, phone } = contact;

  return (
    <div className={s.column}>
      <Input inputType="text" defaultValue={email} />
      <Input inputType="text" defaultValue={phone} />
    </div>
  );
};

ContactCardContentEdit.propTypes = {
  contact: ContactType.isRequired,
};

export default ContactCardContentEdit;
