import React from 'react';
import PropTypes from 'prop-types';

import s from './input-checkbox.css';

import Input from '../input';

const InputCheckbox = ({ inputId, children }) => (
    <label
        htmlFor={inputId}
        className={s.input_checkbox}
    >

        { children }

        <Input
            inputType="checkbox"
            inputId={inputId}
        />
        <span className={s.checkmark} />

    </label>
);

InputCheckbox.defaultProps = {
    inputId: 'InputStart',
};

InputCheckbox.propTypes = {
    children: PropTypes.node.isRequired,
    inputId: PropTypes.string,
};


export default InputCheckbox;
