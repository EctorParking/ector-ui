import React from 'react';
import PropTypes from 'prop-types';
import LinkUnderlined from '../LinkUnderlined';
import s from './CarCardFooter.module.css';
import TextsType, { DefaultTexts } from './CarCardTextsType';
import CarAvatarSvg from './CarAvatar';

const CarCardFooter = ({ texts, mode, onClick, onSubmit, id, color }) => {
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
    what =
      mode.indexOf('selected') !== -1 ? (
        <i className={`icon-checkmark ${s.checkIcon}`} id={`${id}Icon`} />
      ) : (
        <LinkUnderlined onClick={onClick} id={`${id}Link`}>
          <strong>{texts.modify}</strong>
        </LinkUnderlined>
      );
  }

  return (
    <div className={s.footer} id={id}>
      <CarAvatarSvg color={color} />
      {what}
    </div>
  );
};

CarCardFooter.defaultProps = {
  texts: DefaultTexts,
  onClick: () => {},
  onSubmit: () => {},
};

CarCardFooter.propTypes = {
  texts: TextsType,
  mode: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  onSubmit: PropTypes.func,
  id: PropTypes.string.isRequired,
};

export default CarCardFooter;
