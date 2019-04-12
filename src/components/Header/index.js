import React from 'react';
import PropTypes from 'prop-types';

import s from './Header.module.css';

const Header = ({
  wrapperClassName,
  containerClassName,
  children,
  imageUrl,
  onClick,
}) => (
  <div className={[s.wrapper, wrapperClassName].join(' ')}>
    <div className={[s.container, containerClassName].join(' ')}>
      <button onClick={onClick}>
        <img src={imageUrl} alt="logo" />
      </button>
      {children}
    </div>
  </div>
);

Header.defaultProps = {
  wrapperClassName: undefined,
  containerClassName: undefined,
};

Header.propTypes = {
  children: PropTypes.node.isRequired,
  wrapperClassName: PropTypes.string,
  containerClassName: PropTypes.string,
  imageUrl: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Header;
