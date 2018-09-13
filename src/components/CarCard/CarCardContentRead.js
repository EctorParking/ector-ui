import React from 'react';
import CarType from './CarType';
import s from './CarCardContentRead.css';

const CarCardContentRead = ({ car }) => {
  const { numberPlate } = car;

  return (
    <div className={s.column}>
      <span className={s.text} id="carNumberPlate">{numberPlate}</span>
    </div>
  );
};

CarCardContentRead.propTypes = {
  car: CarType.isRequired,
};

export default CarCardContentRead;
