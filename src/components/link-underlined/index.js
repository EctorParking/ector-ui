import React from 'react';
import PropTypes from 'prop-types';

import s from './link-underlined.css';

const LinkUnderlined = ({ children }) => (

  <div className={s.link_underlined}>
    <button>
      { children }
    </button>
  </div>
);

LinkUnderlined.propTypes = {
  children: PropTypes.node.isRequired,
};


export default LinkUnderlined;
