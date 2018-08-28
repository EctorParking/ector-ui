import React from 'react';
import PropTypes from 'prop-types';

import s from './LinkUnderlined.css';

const LinkUnderlined = ({ children, onClick, testid }) => (

  <div className={s.link_underlined}>
    <button testid={testid} onClick={onClick}>
      { children }
    </button>
  </div>
);

LinkUnderlined.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
  testid: PropTypes.string,
};

LinkUnderlined.defaultProps = {
  testid: '',
};


export default LinkUnderlined;
