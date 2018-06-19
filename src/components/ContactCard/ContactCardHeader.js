import React from 'react';
import PropTypes from 'prop-types';
import s from './ContactCardHeader.css';
import ContactType from './ContactType';
import ContactCardTextsType from './ContactCardTextsType';

const ContactCardHeader = ({
    contact,
    modifiable,
    deletable,
    pendingModification,
    texts,
}) => {
    const { firstName, lastName } = contact;

    let button = null;

    if (modifiable) {
        if (!pendingModification) {
            button = (
                <button
                    className={s.editButton}
                    title={texts.modify}
                >
                    <i className={`icon-edit ${s.editIcon}`} />
                </button>
            );
        } else if (deletable) {
            button = (
                <button
                    className={s.editButton}
                    title={texts.delete}
                >
                    <i className={`icon-remove ${s.editIcon}`} />
                </button>
            );
        }
    }

    return (
        <span className={s.name}>
            {`${firstName} ${lastName}`}

            {button}
        </span>
    );
};

ContactCardHeader.propTypes = {
    contact: ContactType.isRequired,
    modifiable: PropTypes.bool.isRequired,
    deletable: PropTypes.bool.isRequired,
    pendingModification: PropTypes.bool.isRequired,
    texts: ContactCardTextsType.isRequired,
};

export default ContactCardHeader;
