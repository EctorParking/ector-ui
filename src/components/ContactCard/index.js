import React from 'react';
import PropTypes from 'prop-types';
import Card from '../Card';
import s from './ContactCard.css';
import ContactType from './ContactType';
import TextsType, { DefaultTexts } from './ContactCardTextsType';
import ContactCardDeletionAlert from './ContactCardDeletionAlert';
import ContactCardHeader from './ContactCardHeader';
import ContactCardFooter from './ContactCardFooter';
import ContactCardContentRead from './ContactCardContentRead';
import ContactCardContentEdit from './ContactCardContentEdit';

const ContactCard = ({
  contact,
  editable,
  texts,
  selected,
  pendingModification,
  pendingDeletion,
  deletable,
  onClick,
  onDelete,
  className,
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

  const footer = mode !== 'delete' ? (
    <ContactCardFooter
      texts={texts}
      mode={mode}
      contact={contact}
    />
  ) : null;

  let header = null;
  let content = mode.indexOf('read') === 0 ? <ContactCardContentRead contact={contact} /> : <ContactCardContentEdit contact={contact} />;

  if (mode.indexOf('delete') === 0) {
    content = <ContactCardDeletionAlert texts={texts} />;
  } else {
    header = (
      <ContactCardHeader
        texts={texts}
        contact={contact}
        editable={editable}
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
      className={className}
    >
      {header}
      {content}
    </Card>
  );
};

ContactCard.propTypes = {
  contact: ContactType.isRequired,
  editable: PropTypes.bool,
  deletable: PropTypes.bool,
  selected: PropTypes.bool,
  pendingModification: PropTypes.bool,
  pendingDeletion: PropTypes.bool,
  texts: TextsType,
  onClick: PropTypes.func,
  onDelete: PropTypes.func,
  className: '',
};

ContactCard.defaultProps = {
  editable: true,
  deletable: true,
  selected: false,
  pendingModification: false,
  pendingDeletion: false,
  onClick: () => {},
  onDelete: () => {},
  texts: DefaultTexts,
  className: PropTypes.string,
};

export default ContactCard;
