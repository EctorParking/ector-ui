import React from 'react';
import PropTypes from 'prop-types';
import Card from '../card';
import s from './ContactCard.css';
import ContactType from './ContactType';
import ContactCardTextsType from './ContactCardTextsType';
import ContactCardDeletionAlert from './ContactCardDeletionAlert';
import ContactCardHeader from './ContactCardHeader';
import ContactCardFooter from './ContactCardFooter';
import ContactCardContentRead from './ContactCardContentRead';
import ContactCardContentEdit from './ContactCardContentEdit';

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
    let mode = 'read';

    if (pendingDeletion) {
        mode = 'delete';
    }
    if (pendingModification) {
        mode = 'edit';
    }

    if (selected) {
        mode += '-selected';
    }

    const footer = (
        <ContactCardFooter
            texts={texts}
            mode={mode}
            contact={contact}
        />
    );

    let header = null;
    let content = mode.indexOf('read') === 0 ? <ContactCardContentRead contact={contact} /> : <ContactCardContentEdit contact={contact} />;

    if (mode.indexOf('delete') === 0) {
        content = <ContactCardDeletionAlert texts={texts} />;
    } else {
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
    contact: ContactType.isRequired,
    modifiable: PropTypes.bool,
    deletable: PropTypes.bool,
    selected: PropTypes.bool,
    pendingModification: PropTypes.bool,
    pendingDeletion: PropTypes.bool,
    texts: ContactCardTextsType.isRequired,
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
