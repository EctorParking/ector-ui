import React from 'react';
import PropTypes from 'prop-types';
import s from './CarCardHeader.css';
import CarType from './CarType';
import CarCardTextsType from './CarCardTextsType';

const CarCardHeader = ({
    car,
    modifiable,
    deletable,
    pendingModification,
    texts,
}) => {
    const { name } = car;

    let button = null;

    if (modifiable) {
        if (!pendingModification) {
            button = (
                <button
                    className={s.editButton}
                    title={texts.modify}
                >
                    <i className={`icon-edit ${s.editIcon}`} />
                </button>
            );
        } else if (deletable) {
            button = (
                <button
                    className={s.editButton}
                    title={texts.delete}
                >
                    <i className={`icon-remove ${s.editIcon}`} />
                </button>
            );
        }
    }

    return (
        <span className={s.name}>
            {name}

            {button}
        </span>
    );
};

CarCardHeader.propTypes = {
    car: CarType.isRequired,
    modifiable: PropTypes.bool.isRequired,
    deletable: PropTypes.bool.isRequired,
    pendingModification: PropTypes.bool.isRequired,
    texts: CarCardTextsType.isRequired,
};

export default CarCardHeader;
