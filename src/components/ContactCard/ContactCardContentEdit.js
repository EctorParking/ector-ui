import React from 'react';
import ContactType from './ContactType';
import Input from '../input';
import s from './ContactCardContentEdit.css';

const ContactCardContentEdit = ({ contact }) => {
    const { email, phoneNumber } = contact;

    return (
        <div className={s.column}>
            <Input inputType="text" defaultValue={email} />
            <Input inputType="text" defaultValue={phoneNumber} />
        </div>
    );
};

ContactCardContentEdit.propTypes = {
    contact: ContactType.isRequired,
};

export default ContactCardContentEdit;
