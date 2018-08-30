import React from 'react';
import PropTypes from 'prop-types';
import LinkUnderlined from '../LinkUnderlined';
import s from './CarCardFooter.css';
import TextsType, { DefaultTexts } from './CarCardTextsType';
import carImage from '../../images/voiture-01-trois-quart-grise.png';

const CarCardFooter = ({ texts, mode, onClick }) => {
  let what;

  if (mode.indexOf('delete') === 0) {
    return null;
  }

  if (mode.indexOf('edit') === 0) {
    what = (
      <LinkUnderlined onClick={onClick}>
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
        src={carImage}
        className={s.carImage}
        alt="Car"
      />
      {what}
    </div>
  );
};

CarCardFooter.defaultProps = {
  texts: DefaultTexts,
  onClick: () => {},
};

CarCardFooter.propTypes = {
  texts: TextsType,
  mode: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

export default CarCardFooter;
