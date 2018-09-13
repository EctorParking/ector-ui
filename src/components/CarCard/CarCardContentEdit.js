import React from 'react';
import PropTypes from 'prop-types';
import CarType from './CarType';
import { Input } from '..';
import s from './CarCardContentEdit.css';

const CarCardContentEdit = ({ car, onChangeNumberPlate, onChangeColor }) => {
  const { name, color } = car;

  return (
    <div className={s.column}>
      <Input type="text" value={name} onChange={onChangeNumberPlate} id="carNameInput" />
      <Input type="text" value={color} onChange={onChangeColor} id="carColorInput" />
    </div>
  );
};

CarCardContentEdit.propTypes = {
  car: CarType.isRequired,
  onChangeNumberPlate: PropTypes.func.isRequired,
  onChangeColor: PropTypes.func.isRequired,
};

export default CarCardContentEdit;
