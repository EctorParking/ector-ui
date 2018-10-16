import React from 'react';
import PropTypes from 'prop-types';
import s from './Title.css';

const Title = ({
  label, className, htmlElement, testid,
}) => (
  <div className={`${s.title} ${className}`} testid={testid}>
    {React.createElement(htmlElement, { className: s.element }, label)}
    <hr className={s.horizontalRule} />
  </div>
);

Title.defaultProps = {
  className: '',
  htmlElement: 'h1',
  testid: '',
};

Title.propTypes = {
  label: PropTypes.string.isRequired,
  className: PropTypes.string,
  htmlElement: PropTypes.string,
  testid: PropTypes.string,
};

export default Title;
