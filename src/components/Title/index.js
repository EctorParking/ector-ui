import React from 'react';
import PropTypes from 'prop-types';
import s from './Title.css';

const Title = ({ label }) => (
    <div className={s.title}>
        <h1>{label}</h1>
        <hr />
    </div>
);

Title.propTypes = {
    label: PropTypes.string.isRequired,
};

export default Title;
