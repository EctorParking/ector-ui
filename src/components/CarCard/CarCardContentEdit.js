import React from 'react';
import CarType from './CarType';
import Input from '../input';
import s from './CarCardContentEdit.css';

const CarCardContentEdit = ({ car }) => {
    const { name, numberPlate } = car;

    return (
        <div className={s.column}>
            <Input inputType="text" defaultValue={name} />
            <Input inputType="text" defaultValue={numberPlate} />
        </div>
    );
};

CarCardContentEdit.propTypes = {
    car: CarType.isRequired,
};

export default CarCardContentEdit;
