import React from 'react';
import PropTypes from 'prop-types';
import s from './CarCardHeader.module.css';
import CarType from './CarType';
import TextsType, { DefaultTexts } from './CarCardTextsType';

const CarCardHeader = ({
  car,
  carName,
  editable,
  deletable,
  pendingDeletion,
  pendingModification,
  texts,
  onEdit,
  onDelete,
  id,
}) => {
  const { name } = car;

  let button = null;

  if (editable && !pendingModification) {
    button = (
      <button
        className={s.editButton}
        title={texts.modify}
        onClick={onEdit}
        id={`${id}Button`}
      >
        <i className={`icon-edit ${s.editIcon}`} id={`${id}Icon`} />
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
        <i className={`icon-bin ${s.deleteIcon}`} id={`${id}Icon`} />
      </button>
    );
  }

  return (
    <>
      <span className={s.name} id={id}>
        {carName || name}
      </span>
      {button}
    </>
  );
};

CarCardHeader.defaultProps = {
  texts: DefaultTexts,
  carName: null,
};

CarCardHeader.propTypes = {
  car: CarType.isRequired,
  carName: CarType.string,
  editable: PropTypes.bool.isRequired,
  deletable: PropTypes.bool.isRequired,
  pendingDeletion: PropTypes.bool.isRequired,
  pendingModification: PropTypes.bool.isRequired,
  texts: TextsType,
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
};

export default CarCardHeader;
