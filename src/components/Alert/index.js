import React from 'react';
import PropTypes from 'prop-types';
import s from './Alert.module.css';

const icons = {
  success: 'checkmark',
  error: 'error-outline',
  warning: 'warning',
};

const Alert = ({
  children,
  type,
  title,
  className,
}) => (
  <div className={`${s.alert} ${s[type]} ${className}`}>
    <i className={`icon-${icons[type]} ${s.icon}`} />

    <div>
      <strong className={s.title}>{title}</strong>
      <p>{children}</p>
    </div>
  </div>
);

Alert.defaultProps = {
  className: '',
};

Alert.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.oneOf(Object.keys(icons)).isRequired,
  title: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default Alert;
