import React from 'react';
import PropTypes from 'prop-types';
import LinkUnderlined from '../LinkUnderlined';
import s from './ContactCardFooter.css';
import ContactCardTextsType from './ContactCardTextsType';
import ContactType from './ContactType';

const ContactCardFooter = ({
  texts, contact, mode, onClick, onSubmit, id,
}) => {
  let what;

  if (mode.indexOf('delete') === 0) {
    return null;
  }

  if (mode.indexOf('edit') === 0) {
    what = (
      <LinkUnderlined onClick={onSubmit} id={`${id}Link`}>
        <strong>{texts.save}</strong>
      </LinkUnderlined>
    );
  } else {
    what = mode.indexOf('selected') !== -1 ? (
      <i className={`icon-checkmark ${s.checkIcon}`} id={`${id}Icon`} />
    ) : (
      <LinkUnderlined onClick={onClick} id={`${id}Link`}>
        <strong>{texts.modify}</strong>
      </LinkUnderlined>
    );
  }

  return (
    <div className={s.footer} id={id}>
      {what}
    </div>
  );
};

ContactCardFooter.propTypes = {
  texts: ContactCardTextsType.isRequired,
  contact: ContactType.isRequired,
  mode: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
};

export default ContactCardFooter;
