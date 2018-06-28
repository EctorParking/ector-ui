import React from 'react';
import PropTypes from 'prop-types';

import s from './RadioButton.css';

const RadioButton = ({
    name,
    value,
    label,
    checked,
    required,
    onSelect,
}) => (
    <label
        htmlFor={`${name}-${value}`}
        className={s.radioButton}
    >
        <input
            type="radio"
            defaultChecked={checked}
            required={required}
            name={name}
            value={value}
            id={`${name}-${value}`}
            onChange={() => onSelect(value)}
        />

        <span>{label}</span>
    </label>
);

RadioButton.defaultProps = {
    checked: false,
    required: false,
    onSelect: () => {},
};

RadioButton.propTypes = {
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    checked: PropTypes.bool,
    required: PropTypes.bool,
    onSelect: PropTypes.func,
};

export default RadioButton;
