import React from 'react';
import PropTypes from 'prop-types';
import s from './Title.css';

const Title = ({ label, className, htmlElement }) => (
  <div className={`${s.title} ${className}`}>
    {React.createElement(htmlElement, { className: s.element }, label)}
    <hr className={s.horizontalRule} />
  </div>
);

Title.defaultProps = {
  className: '',
  htmlElement: 'h1',
};

Title.propTypes = {
  label: PropTypes.string.isRequired,
  className: PropTypes.string,
  htmlElement: PropTypes.string,
};

export default Title;
