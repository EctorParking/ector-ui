import React from 'react';
import PropTypes from 'prop-types';

import s from './input.css';

const Input = ({ inputType, inputPlaceHolder, inputId }) => (
    <input
        className={s.input}
        type={inputType}
        placeholder={inputPlaceHolder}
        id={inputId}
    />
);

Input.defaultProps = {
    inputPlaceHolder: '',
    inputId: '',
};

Input.propTypes = {
    inputType: PropTypes.string.isRequired,
    inputPlaceHolder: PropTypes.string,
    inputId: PropTypes.string,
};


export default Input;
