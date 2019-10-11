import React from 'react';
import PropTypes from 'prop-types';
import s from './Box.module.css';

const Box = ({ className, children }) => (
  <div className={[s.box, className].join(' ')}>
    {children}
  </div>
);

Box.defaultProps = {
  className: '',
};

Box.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default Box;
