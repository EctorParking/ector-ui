import React from 'react';
import PropTypes from 'prop-types';

import s from './CardTitle.module.css';

const CardTitle = ({ children, className, ...restOfProps }) => (
  <h3 className={[s.card_title, className].join(' ')} {...restOfProps}>
    {children}
  </h3>
);

CardTitle.defaultProps = {
  className: '',
};

CardTitle.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default CardTitle;
