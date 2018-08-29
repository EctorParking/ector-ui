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
  texts,
  selected,
  pendingModification,
  pendingDeletion,
  deletable,
  onEdit,
  onDelete,
  onClick,
  className,
}) => {
  let mode = 'read';

  if (deletable) {
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
  let content = mode.indexOf('read') === 0 ? <CarCardContentRead car={car} /> : <CarCardContentEdit car={car} />;

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
      {content}
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
};

CarCard.defaultProps = {
  texts: DefaultTexts,
  editable: true,
  deletable: false,
  selected: false,
  pendingModification: false,
  pendingDeletion: false,
  onClick: () => {},
  onEdit: () => {},
  onDelete: () => {},
  className: '',
};

export default CarCard;
