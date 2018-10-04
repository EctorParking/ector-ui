import React from 'react';
import PropTypes from 'prop-types';

import s from './LinkUnderlined.css';
import { Loader } from '..';

const LinkUnderlined = ({
  children, onClick, testid, className, id, fetching, ...loaderProps
}) => (fetching
  ? (<Loader {...loaderProps} />)
  : (
    <div className={[s.link_underlined, className].join(' ')} id={id}>
      <button testid={testid} onClick={onClick} id={id === LinkUnderlined.defaultProps.id ? '' : `${id}Button`}>
        { children }
      </button>
    </div>
  ));

LinkUnderlined.defaultProps = {
  className: '',
};

LinkUnderlined.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
  testid: PropTypes.string,
  className: PropTypes.string,
  id: PropTypes.string,
  fetching: PropTypes.bool,
};

LinkUnderlined.defaultProps = {
  testid: '',
  className: undefined,
  id: '',
  fetching: false,
};

export default LinkUnderlined;
