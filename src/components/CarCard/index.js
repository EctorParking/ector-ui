import React from 'react';
import PropTypes from 'prop-types';
import Card from '../Card';
import s from './CarCard.css';
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
    <CarCardFooter
      texts={texts}
      mode={mode}
      onClick={onClick}
    />
  );

  let header = null;
  let content = mode.indexOf('read') === 0 ? (
    <CarCardContentRead car={car} />
  ) : (
    <CarCardContentEdit
      car={car}
      onChangeColor={onChangeColor}
      onChangeNumberPlate={onChangeNumberPlate}
    />
  );

  if (mode.indexOf('delete') === 0) {
    content = (
      <CarCardDeletionAlert
        texts={texts}
        onDelete={onDelete}
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
      />
    );
  }

  return (
    <Card
      FooterChildren={footer}
      isSelected={selected}
      contentClassName={pendingDeletion ? s.pendingDeletion : ''}
      className={className}
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
};

export default CarCard;
