import React from 'react';
import PropTypes from 'prop-types';

import s from './input-label.css';

const InputLabel = ({ children, inputId, isImportant }) => {
    const labelClassName = isImportant ? s.isimportant : '';

    return (
        <label
            htmlFor={inputId}
            className={labelClassName}
        >
            { children }

            {/* TODO : put the right input component here */}
            <input type="text" id={inputId} />

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
