import React from 'react';
import PropTypes from 'prop-types';

import s from './LinkUnderlined.css';

const LinkUnderlined = ({
  children, onClick, testid, className, id, fetching,
}) => (
  <div className={[s.link_underlined, fetching ? s.link_underlined_fetching : undefined, className].join(' ')} id={id}>
    <button
      testid={testid}
      onClick={onClick}
      id={id === LinkUnderlined.defaultProps.id ? '' : `${id}Button`}
      className={fetching ? s.fetching : undefined}
    >
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
  fetching: PropTypes.bool,
};

LinkUnderlined.defaultProps = {
  testid: '',
  className: undefined,
  id: '',
  fetching: false,
};

export default LinkUnderlined;
