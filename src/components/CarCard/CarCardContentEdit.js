import React from 'react';
import PropTypes from 'prop-types';
import CarType from './CarType';
import { Input } from '..';
import s from './CarCardContentEdit.module.css';

const CarCardContentEdit = ({
  car,
  onChangeNumberPlate,
  onChangeColor,
  id,
}) => {
  const { name, color } = car;

  return (
    <div className={s.column} id={id}>
      <Input
        type="text"
        value={name}
        onChange={onChangeNumberPlate}
        id="carNameInput"
      />
      <Input
        type="text"
        value={color}
        onChange={onChangeColor}
        id="carColorInput"
      />
    </div>
  );
};

CarCardContentEdit.propTypes = {
  car: CarType.isRequired,
  onChangeNumberPlate: PropTypes.func.isRequired,
  onChangeColor: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
};

export default CarCardContentEdit;
