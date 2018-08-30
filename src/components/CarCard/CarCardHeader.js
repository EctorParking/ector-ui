import React from 'react';
import PropTypes from 'prop-types';
import s from './CarCardHeader.css';
import CarType from './CarType';
import TextsType, { DefaultTexts } from './CarCardTextsType';

const CarCardHeader = ({
  car,
  editable,
  pendingDeletion,
  pendingModification,
  texts,
}) => {
  const { name } = car;

  let button = null;

  if (editable) {
    if (!pendingModification) {
      button = (
        <button
          className={s.editButton}
          title={texts.modify}
        >
          <i className={`icon-edit ${s.editIcon}`} />
        </button>
      );
    } else if (!pendingDeletion) {
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

  return (
    <span className={s.name}>
      {name}

      {button}
    </span>
  );
};

CarCardHeader.defaultProps = {
  texts: DefaultTexts,
};

CarCardHeader.propTypes = {
  car: CarType.isRequired,
  editable: PropTypes.bool.isRequired,
  pendingDeletion: PropTypes.bool.isRequired,
  pendingModification: PropTypes.bool.isRequired,
  texts: TextsType,
};

export default CarCardHeader;
