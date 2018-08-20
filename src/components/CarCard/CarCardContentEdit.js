import React from 'react';
import CarType from './CarType';
import Input from '../Input';
import s from './CarCardContentEdit.css';

const CarCardContentEdit = ({ car }) => {
  const { name, numberPlate } = car;

  return (
    <div className={s.column}>
      <Input type="text" defaultValue={name} />
      <Input type="text" defaultValue={numberPlate} />
    </div>
  );
};

CarCardContentEdit.propTypes = {
  car: CarType.isRequired,
};

export default CarCardContentEdit;
