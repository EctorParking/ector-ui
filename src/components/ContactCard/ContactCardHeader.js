import React from 'react';
import PropTypes from 'prop-types';
import s from './ContactCardHeader.module.css';
import ContactType from './ContactType';
import ContactCardTextsType from './ContactCardTextsType';

const ContactCardHeader = ({
  contact,
  editable,
  deletable,
  pendingDeletion,
  pendingModification,
  texts,
  onEdit,
  onDelete,
  id,
}) => {
  const { firstName, lastName } = contact;

  let button = null;

  if (editable && !pendingModification) {
    button = (
      <button
        className={s.editButton}
        title={texts.modify}
        onClick={onEdit}
        id={`${id}Button`}
      >
        <i className={`icon-edit ${s.editIcon}`} />
      </button>
    );
  } else if (deletable && !pendingDeletion) {
    button = (
      <button
        className={s.editButton}
        title={texts.delete}
        onClick={onDelete}
        id={`${id}Button`}
      >
        <i className={`icon-bin ${s.deleteIcon}`} />
      </button>
    );
  }

  return (
    <>
      <span className={s.name} id={id}>
        {`${firstName} ${lastName}`}
      </span>
      {button}
    </>
  );
};

ContactCardHeader.propTypes = {
  contact: ContactType.isRequired,
  editable: PropTypes.bool.isRequired,
  deletable: PropTypes.bool.isRequired,
  pendingDeletion: PropTypes.bool.isRequired,
  pendingModification: PropTypes.bool.isRequired,
  texts: ContactCardTextsType.isRequired,
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
};

export default ContactCardHeader;
