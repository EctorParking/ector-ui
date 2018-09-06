import React from 'react';
import PropTypes from 'prop-types';
import LinkUnderlined from '../LinkUnderlined';
import s from './ContactCardFooter.css';
import ContactCardTextsType from './ContactCardTextsType';
import ContactType from './ContactType';
import maleImage from '../../images/avatar-man.svg';
import femaleImage from '../../images/avatar-woman.svg';

const avatars = {
  male: maleImage,
  female: femaleImage,
};

const ContactCardFooter = ({
  texts, contact, mode, onClick, onSubmit,
}) => {
  const { title } = contact;
  let what;

  if (mode.indexOf('delete') === 0) {
    return null;
  }

  if (mode.indexOf('edit') === 0) {
    what = (
      <LinkUnderlined onClick={onSubmit}>
        <strong>{texts.save}</strong>
      </LinkUnderlined>
    );
  } else {
    what = mode.indexOf('selected') !== -1 ? (
      <i className={`icon-checkmark ${s.checkIcon}`} />
    ) : (
      <LinkUnderlined onClick={onClick}>
        <strong>{texts.modify}</strong>
      </LinkUnderlined>
    );
  }

  return (
    <div className={s.footer}>
      <img
        src={avatars[title]}
        className={s.genderImage}
        alt={title}
      />
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
};

export default ContactCardFooter;
