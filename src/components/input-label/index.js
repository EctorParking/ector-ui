import React from 'react';
import PropTypes from 'prop-types';

import s from './input-label.css';

import Input from '../input';

const InputLabel = ({
    children, inputId, isImportant, placeHolder,
}) => {
    const labelClassName = isImportant ? s.isimportant : '';

    return (
        <label
            htmlFor={inputId}
            className={labelClassName}
        >
            { children }

            <Input
                inputType="text"
                inputId={inputId}
                inputPlaceHolder={placeHolder}
            />

        </label>
    );
};

InputLabel.defaultProps = {
    inputId: 'InputStart',
    isImportant: false,
    placeHolder: '',
};

InputLabel.propTypes = {
    children: PropTypes.node.isRequired,
    inputId: PropTypes.string,
    isImportant: PropTypes.bool,
    placeHolder: PropTypes.string,
};


export default InputLabel;
