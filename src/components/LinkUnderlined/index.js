import React from 'react';
import PropTypes from 'prop-types';

import s from './LinkUnderlined.css';

const LinkUnderlined = ({
  children, onClick, testid, className, id,
}) => (

  <div className={[s.link_underlined, className].join(' ')} id={id}>
    <button testid={testid} onClick={onClick} id={id === LinkUnderlined.defaultProps.id ? '' : `${id}Button`}>
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
  testid: PropTypes.string,
  className: PropTypes.string,
  id: PropTypes.string,
};

LinkUnderlined.defaultProps = {
  testid: '',
  className: '',
  id: '',
};

export default LinkUnderlined;
