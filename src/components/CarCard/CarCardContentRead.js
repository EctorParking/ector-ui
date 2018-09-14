import React from 'react';
import PropTypes from 'prop-types';
import CarType from './CarType';
import s from './CarCardContentRead.css';

const CarCardContentRead = ({ car, id }) => {
  const { numberPlate } = car;

  return (
    <div className={s.column} id={id}>
      <span className={s.text} id="carNumberPlate">{numberPlate}</span>
    </div>
  );
};

CarCardContentRead.propTypes = {
  car: CarType.isRequired,
  id: PropTypes.string.isRequired,
};

export default CarCardContentRead;
