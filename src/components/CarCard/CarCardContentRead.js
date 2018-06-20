import React from 'react';
import CarType from './CarType';
import s from './CarCardContentRead.css';

const CarCardContentRead = ({ car }) => {
    const { name, numberPlate } = car;

    return (
        <div className={s.column}>
            <span className={s.text}>{name}</span>
            <span className={s.text}>{numberPlate}</span>
        </div>
    );
};

CarCardContentRead.propTypes = {
    car: CarType.isRequired,
};

export default CarCardContentRead;