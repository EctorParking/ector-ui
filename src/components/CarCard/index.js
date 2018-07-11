import React from 'react';
import PropTypes from 'prop-types';
import Card from '../card';
import s from './CarCard.css';
import CarType from './CarType';
import CarCardTextsType from './CarCardTextsType';
import CarCardDeletionAlert from './CarCardDeletionAlert';
import CarCardHeader from './CarCardHeader';
import CarCardFooter from './CarCardFooter';
import CarCardContentRead from './CarCardContentRead';
import CarCardContentEdit from './CarCardContentEdit';

const CarCard = ({
  car,
  modifiable,
  texts,
  selected,
  pendingModification,
  pendingDeletion,
  deletable,
  onClick,
  onDelete,
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
        modifiable={modifiable}
        deletable={deletable}
        pendingModification={pendingModification}
      />
    );
  }

  return (
    <Card
      FooterChildren={footer}
      isSelected={selected}
      contentClassName={pendingDeletion ? s.pendingDeletion : ''}
    >
      {header}
      {content}
    </Card>
  );
};

CarCard.propTypes = {
  car: CarType.isRequired,
  modifiable: PropTypes.bool,
  deletable: PropTypes.bool,
  selected: PropTypes.bool,
  pendingModification: PropTypes.bool,
  pendingDeletion: PropTypes.bool,
  texts: CarCardTextsType.isRequired,
  onClick: PropTypes.func,
  onDelete: PropTypes.func,
};

CarCard.defaultProps = {
  modifiable: true,
  deletable: true,
  selected: false,
  pendingModification: false,
  pendingDeletion: false,
  onClick: () => {},
  onDelete: () => {},
};

export default CarCard;
