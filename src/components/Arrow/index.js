import React from 'react';
import PropTypes from 'prop-types';

const positionToUnicodeCharacter = {
  top: '\u25b2',
  bottom: '\u25bc',
  right: '\u25b6',
  left: '\u25c0',
};

const Arrow = ({ className, position }) => (
  <span className={className}>{positionToUnicodeCharacter[position]}</span>
);

Arrow.defaultProps = {
  position: 'top',
  className: undefined,
};

Arrow.propTypes = {
  position: PropTypes.oneOf(['top', 'bottom', 'left', 'right']),
  className: PropTypes.string,
};

export default Arrow;
