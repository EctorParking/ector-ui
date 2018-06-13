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

const ContactCard = ({
    firstName,
    lastName,
    email,
    phoneNumber,
    gender,
    modifiable,
    texts,
    selected,
    pendingModification,
    pendingDeletion,
    deletable,
    onClick,
    onDelete,
}) => {
    const footer = !pendingDeletion ? (
        <div className={s.footer}>
            <img
                src={`./images/${gender}.png`}
                className={s.carImage}
            />
            {
                !selected && !pendingModification &&
                <LinkUnderlined>
                    <strong>{texts.modify}</strong>
                </LinkUnderlined>
            }
            {
                selected && !pendingModification &&
                <i className={`icon-checkmark ${s.checkIcon}`} />
            }
            {
                pendingModification &&
                <LinkUnderlined>
                    <strong>{texts.save}</strong>
                </LinkUnderlined>
            }
        </div>
    ) : null;

    return (
        <Card
            FooterChildren={footer}
            isSelected={selected}
            contentClassName={pendingDeletion ? s.pendingDeletion : ''}
        >
            {
                !pendingDeletion && (
                    <span className={s.name}>
                        {`${firstName} ${lastName}`}

                        {
                            modifiable && !pendingModification &&
                            <button className={s.editButton}>
                                <i className={`icon-edit ${s.editIcon}`} />
                            </button>
                        }
                        {
                            modifiable && deletable && pendingModification &&
                            <button className={s.editButton}>
                                <i className={`icon-remove ${s.editIcon}`} />
                            </button>
                        }
                    </span>
                )
            }
            {
                !pendingModification && !pendingDeletion && (
                    <div className={s.column}>
                        <span className={s.text}>{email}</span>
                        <span className={s.text}>{phoneNumber}</span>
                    </div>
                )
            }
            {
                pendingModification && (
                    <div className={s.column}>
                        <Input inputType="text" defaultValue={email} />
                        <Input inputType="text" defaultValue={phoneNumber} />
                    </div>
                )
            }
            {
                pendingDeletion && <DeletionAlert texts={texts} />
            }
        </Card>
    );
};

ContactCard.propTypes = {
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phoneNumber: PropTypes.string.isRequired,
    gender: PropTypes.oneOf(['male', 'female']),
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
