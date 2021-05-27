import React from 'react';
import PropTypes from 'prop-types';
import Card from '../Card';
import s from './CarCard.module.css';
import CarType from './CarType';
import TextsType, { DefaultTexts } from './CarCardTextsType';
import CarCardDeletionAlert from './CarCardDeletionAlert';
import CarCardHeader from './CarCardHeader';
import CarCardFooter from './CarCardFooter';
import CarCardContentRead from './CarCardContentRead';
import CarCardContentEdit from './CarCardContentEdit';

const CarCard = ({
  car,
  editable,
  deletable,
  texts,
  selected,
  pendingModification,
  pendingDeletion,
  onEdit,
  onDelete,
  onClick,
  className,
  onChangeColor,
  onChangeNumberPlate,
  children,
  onSubmit,
  onConfirmDeletion,
  onCancelDeletion,
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

  const footer =
    mode.indexOf('delete') === 0 ? null : (
      <CarCardFooter
        texts={texts}
        mode={mode}
        onClick={onClick}
        onSubmit={onSubmit}
        id={`${idPrefix}Footer`}
      />
    );

  let header = null;
  let content =
    mode.indexOf('read') === 0 ? (
      <CarCardContentRead car={car} id={`${idPrefix}ContentRead`} />
    ) : (
      <CarCardContentEdit
        car={car}
        onChangeColor={onChangeColor}
        onChangeNumberPlate={onChangeNumberPlate}
        id={`${idPrefix}ContentEdit`}
      />
    );

  if (mode.indexOf('delete') === 0) {
    content = (
      <CarCardDeletionAlert
        texts={texts}
        onDelete={onConfirmDeletion}
        onCancel={onCancelDeletion}
        id={`${idPrefix}DeletionAlert`}
      />
    );
  } else {
    header = (
      <CarCardHeader
        texts={texts}
        car={car}
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
      contentClassName={[
        pendingModification ? s.pendingModification : '',
        pendingDeletion ? s.pendingDeletion : '',
      ].join(' ')}
      className={className}
      {...cardProps}
    >
      {header}
      {children !== null ? children : content}
    </Card>
  );
};

CarCard.propTypes = {
  car: CarType.isRequired,
  editable: PropTypes.bool,
  deletable: PropTypes.bool,
  selected: PropTypes.bool,
  pendingModification: PropTypes.bool,
  pendingDeletion: PropTypes.bool,
  texts: TextsType,
  onEdit: PropTypes.func,
  onDelete: PropTypes.func,
  onClick: PropTypes.func,
  className: PropTypes.string,
  onChangeNumberPlate: PropTypes.func,
  onChangeColor: PropTypes.func,
  children: PropTypes.node,
  onSubmit: PropTypes.func,
  onConfirmDeletion: PropTypes.func,
  onCancelDeletion: PropTypes.func,
  idPrefix: PropTypes.string,
};

CarCard.defaultProps = {
  texts: DefaultTexts,
  editable: true,
  selected: false,
  pendingModification: false,
  pendingDeletion: false,
  onClick: () => {},
  onEdit: () => {},
  onDelete: () => {},
  className: '',
  deletable: false,
  onChangeNumberPlate: () => {},
  onChangeColor: () => {},
  children: null,
  onSubmit: () => {},
  onConfirmDeletion: () => {},
  onCancelDeletion: () => {},
  idPrefix: 'carCard',
};

export default CarCard;
