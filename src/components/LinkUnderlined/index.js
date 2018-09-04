import React from 'react';
import PropTypes from 'prop-types';

import s from './LinkUnderlined.css';

const LinkUnderlined = ({
  children, onClick, testid, className,
}) => (

  <div className={[s.link_underlined, className].join(' ')}>
    <button testid={testid} onClick={onClick}>
      { children }
    </button>
  </div>
);

LinkUnderlined.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
  testid: PropTypes.string,
  className: PropTypes.string,
};

LinkUnderlined.defaultProps = {
  testid: '',
  className: '',
};


export default LinkUnderlined;
