import React from 'react';
import PropTypes from 'prop-types';

import s from './input-label.css';

import Input from '../input';

const InputLabel = ({ children, inputId, isImportant }) => {
    const labelClassName = isImportant ? s.isimportant : '';

    return (
        <label
            htmlFor={inputId}
            className={labelClassName}
        >
            { children }

            {/* TODO : put the right input component here */}
            <Input inputType="text" inputId={inputId} />

        </label>
    );
};

InputLabel.defaultProps = {
    inputId: 'InputStart',
    isImportant: false,
};

InputLabel.propTypes = {
    children: PropTypes.node.isRequired,
    inputId: PropTypes.string,
    isImportant: PropTypes.bool,
};


export default InputLabel;
