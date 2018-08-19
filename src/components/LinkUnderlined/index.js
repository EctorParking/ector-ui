import React from 'react';
import PropTypes from 'prop-types';

import s from './LinkUnderlined.css';

const LinkUnderlined = ({ children, onClick, className }) => (

  <div className={`${s.link_underlined} ${className}`}>
    <button onClick={onClick}>
      { children }
    </button>
  </div>
);

LinkUnderlined.defaultProps = {
  className: '',
};

LinkUnderlined.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string,
};

export default LinkUnderlined;
