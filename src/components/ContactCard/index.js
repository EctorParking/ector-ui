import React from 'react';
import PropTypes from 'prop-types';
import Card from '../card';
import LinkUnderlined from '../link-underlined';
import Input from '../input';
import s from './ContactCard.css';

/* eslint-disable */

const DeletionAlert = ({ texts, onDelete }) => (
    <div className={s.deletionAlert}>
        <strong>{texts.confirmDeletionTitle}</strong>
        <p>{texts.confirmDeletionSentence}</p>
        <div className={s.deletionButtons}>
            <LinkUnderlined>
                <strong>{texts.cancel}</strong>
            </LinkUnderlined>
            <LinkUnderlined onClick={onDelete}>
                <strong>{texts.confirm}</strong>
            </LinkUnderlined>
        </div>
    </div>
);

const ContactCardFooter = ({ texts, gender, mode }) => {
    let what;

    if (mode.indexOf('delete') === 0) {
        return null;
    }

    if (mode.indexOf('edit') === 0) {
        what = (
            <LinkUnderlined>
                <strong>{texts.save}</strong>
            </LinkUnderlined>
        );
    }
    else {
        what = mode.indexOf('selected') !== -1 ? (
            <i className={`icon-checkmark ${s.checkIcon}`} />
        ) : (
            <LinkUnderlined>
                <strong>{texts.modify}</strong>
            </LinkUnderlined>
        );
    }

    return (
        <div className={s.footer}>
            <img
                src={`./images/${gender}.png`}
                className={s.carImage}
            />
            {what}
        </div>
    );
};

const ContactCardHeader = ({ contact, modifiable, deletable, pendingModification, texts }) => {
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
        }
        else {
            if (deletable) {
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
    }

    return (
        <span className={s.name}>
            {`${firstName} ${lastName}`}

            {button}
        </span>
    );
};

const ContactCardContentRead = ({ contact }) => {
    const { email, phoneNumber } = contact;

    return (
        <div className={s.column}>
            <span className={s.text}>{email}</span>
            <span className={s.text}>{phoneNumber}</span>
        </div>
    );
};

const ContactCardContentEdit = ({ contact }) => {
    const { email, phoneNumber } = contact;

    return (
        <div className={s.column}>
            <Input inputType="text" defaultValue={email} />
            <Input inputType="text" defaultValue={phoneNumber} />
        </div>
    );
};

const ContactCard = ({
    contact,
    modifiable,
    texts,
    selected,
    pendingModification,
    pendingDeletion,
    deletable,
    onClick,
    onDelete,
}) => {
    const {
        firstName,
        lastName,
        email,
        phoneNumber,
        gender,
    } = contact;

    let mode = 'read';

    if (pendingDeletion) {
        mode = 'delete';
    }
    if (pendingModification) {
        mode = 'edit';
    }

    if (selected) {
        mode = mode + '-selected';
    }

    const footer = (
        <ContactCardFooter
            texts={texts}
            mode={mode}
            gender={gender}
        />
    );

    let header = null;
    let content = mode.indexOf('read') === 0 ? <ContactCardContentRead contact={contact} /> : <ContactCardContentEdit contact={contact} />;

    if (mode.indexOf('delete') === 0) {
        content = <DeletionAlert texts={texts} />;
    }
    else {
        header = (
            <ContactCardHeader
                texts={texts}
                contact={contact}
                modifiable={modifiable}
                deletable={deletable}
                pendingModification={pendingModification}
            />
        );
    }

    return (
        <Card
            FooterChildren={footer}
            isSelected={selected}
            contentClassName={pendingDeletion ? s.pendingDeletion : ''}
        >
            {header}
            {content}
        </Card>
    );
};

ContactCard.propTypes = {
    contact: PropTypes.shape({
        firstName: PropTypes.string,
        lastName: PropTypes.string,
        email: PropTypes.string,
        phoneNumber: PropTypes.string,
        gender: PropTypes.oneOf(['male', 'female']),
    }).isRequired,
    modifiable: PropTypes.bool,
    deletable: PropTypes.bool,
    selected: PropTypes.bool,
    pendingModification: PropTypes.bool,
    pendingDeletion: PropTypes.bool,
    texts: PropTypes.object.isRequired,
    onClick: PropTypes.func,
    onDelete: PropTypes.func,
};

ContactCard.defaultProps = {
    modifiable: true,
    deletable: true,
    selected: false,
    pendingModification: false,
    pendingDeletion: false,
    onClick: () => {},
    onDelete: () => {},
};

export default ContactCard;
