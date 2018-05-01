import React from 'react';
import PropTypes from 'prop-types';

import s from './title.css';

const TitleButton = ({
    Active, ButtonNumber, children, Done, onClick,
}) => {
    // console.log('s.inactive :', s.inactive);
    // console.log('this.props.Active :', this.props.Active);

    const className = Active ? s.title_button_active : s.title_button_normal;

    console.log('className :', className);

    return (
        <button
            className={className}
            onClick={onClick}
        >
            { children }
        </button>
    );
};

TitleButton.defaultProps = {
    ButtonNumber: 7,
    children: 'Infos Voyageur',
    Done: false,
};

TitleButton.propTypes = {
    Active: PropTypes.bool.isRequired,
    ButtonNumber: PropTypes.number,
    children: PropTypes.node,
    Done: PropTypes.bool,
    onClick: PropTypes.func.isRequired,
};


export default TitleButton;
