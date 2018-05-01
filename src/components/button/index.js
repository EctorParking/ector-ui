import React from 'react';
import PropTypes from 'prop-types';

import s from './button.css';


const Button = ({ onClick, children }) => (
    <button
        className={s.root}
        onClick={onClick}
    >
        { children }
    </button>
);

Button.defaultProps = {
    children: 'Validate',
};

Button.propTypes = {
    onClick: PropTypes.bool.isRequired,
    children: PropTypes.node,
};


export default Button;
