import React from 'react';
import PropTypes from 'prop-types';
import Card from '../Card';
import s from './ContactCard.css';
import ContactType, { ContactFormValuesType, ContactFormErrorsType } from './ContactType';
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
  onEdit,
  onSubmit,
  onChangeEmail,
  onChangePhoneNumber,
  formValues,
  formErrors,
  onCancelDeletion,
  onConfirmDeletion,
  idPrefix,
  ...cardProps
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

  const footer = mode.indexOf('delete') === 0 ? null : (
    <ContactCardFooter
      texts={texts}
      mode={mode}
      contact={contact}
      onClick={onClick}
      onSubmit={onSubmit}
      id={`${idPrefix}Footer`}
    />
  );

  let header = null;
  let content = mode.indexOf('read') === 0 ? (
    <ContactCardContentRead contact={contact} id={`${idPrefix}ContentRead`} />
  ) : (
    <ContactCardContentEdit
      contact={contact}
      onChangeEmail={onChangeEmail}
      onChangePhoneNumber={onChangePhoneNumber}
      values={formValues}
      errors={formErrors}
      id={`${idPrefix}ContentEdit`}
    />
  );

  if (mode.indexOf('delete') === 0) {
    content = (
      <ContactCardDeletionAlert
        texts={texts}
        onCancel={onCancelDeletion}
        onConfirm={onConfirmDeletion}
        id={`${idPrefix}DeletionAlert`}
      />
    );
  } else {
    header = (
      <ContactCardHeader
        texts={texts}
        contact={contact}
        editable={editable}
        deletable={deletable}
        pendingDeletion={pendingDeletion}
        pendingModification={pendingModification}
        onDelete={onDelete}
        onEdit={onEdit}
        id={`${idPrefix}Header`}
      />
    );
  }

  return (
    <Card
      FooterChildren={footer}
      isSelected={selected}
      contentClassName={[pendingModification ? s.pendingModification : '', pendingDeletion ? s.pendingDeletion : ''].join(' ')}
      {...cardProps}
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
  onEdit: PropTypes.func,
  onSubmit: PropTypes.func,
  onChangeEmail: PropTypes.func,
  onChangePhoneNumber: PropTypes.func,
  formValues: ContactFormValuesType,
  formErrors: ContactFormErrorsType,
  onCancelDeletion: PropTypes.func,
  onConfirmDeletion: PropTypes.func,
  idPrefix: PropTypes.string,
};

ContactCard.defaultProps = {
  editable: true,
  deletable: false,
  selected: false,
  pendingModification: false,
  pendingDeletion: false,
  onClick: () => {},
  onDelete: () => {},
  onEdit: () => {},
  texts: DefaultTexts,
  onSubmit: () => {},
  onChangeEmail: () => {},
  onChangePhoneNumber: () => {},
  onCancelDeletion: () => {},
  onConfirmDeletion: () => {},
  idPrefix: 'contactCard',
  formValues: {
    email: '',
    phone: '',
  },
  formErrors: {
    email: null,
    phone: null,
  },
};

export default ContactCard;
