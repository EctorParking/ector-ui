import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../Icon';
import s from './IconPatched.module.css';

const IconPatched = ({ className, ...props }) => (
  <Icon {...props} className={[className, s.icon].join(' ')} />
);

IconPatched.defaultProps = {
  className: '',
};

IconPatched.propTypes = {
  className: PropTypes.string,
};

export default IconPatched;
