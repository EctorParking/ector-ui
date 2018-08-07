import React from 'react';
import PropTypes from 'prop-types';

import s from './LinkUnderlined.css';

const LinkUnderlined = ({ children, onClick }) => (

  <div className={s.link_underlined}>
    <button onClick={onClick}>
      { children }
    </button>
  </div>
);

LinkUnderlined.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
};


export default LinkUnderlined;
