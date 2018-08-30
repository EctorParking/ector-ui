import React from 'react';
import PropTypes from 'prop-types';
import s from './CarCardHeader.css';
import CarType from './CarType';
import TextsType, { DefaultTexts } from './CarCardTextsType';

const CarCardHeader = ({
  car,
  editable,
  deletable,
  pendingDeletion,
  pendingModification,
  texts,
  onEdit,
  onDelete,
}) => {
  const { name } = car;

  let button = null;

  if (editable && !pendingModification) {
    button = (
      <button
        className={s.editButton}
        title={texts.modify}
        onClick={onEdit}
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
      >
        <i className={`icon-bin ${s.editIcon}`} />
      </button>
    );
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
  deletable: PropTypes.bool.isRequired,
  pendingDeletion: PropTypes.bool.isRequired,
  pendingModification: PropTypes.bool.isRequired,
  texts: TextsType,
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default CarCardHeader;
