import React from 'react';
import PropTypes from 'prop-types';

import s from './ColorPicker.css';

const ColorPicker = ({
    colorsList, onSelect,
}) => (
    <div className={s.colorPicker}>
        {colorsList.map(color => (
            <button
                key={`color-${color.label}`}
                className={`${s.badge} ${color.hexadecimalCode === 'transparent' ? s.transparent : ''}`}
                style={{ backgroundColor: color.hexadecimalCode }}
                title={color.label}
                onClick={() => onSelect(color)}
            />
        ))}
    </div>
);

ColorPicker.propTypes = {
    colorsList: PropTypes.arrayOf(PropTypes.shape({
        label: PropTypes.string,
        hexadecimalCode: PropTypes.string,
    })).isRequired,
    onSelect: PropTypes.func.isRequired,
};

export default ColorPicker;
