import React from 'react';
import PropTypes from 'prop-types';

import s from './CardTitle.css';

const CardTitle = ({ children, className }) => (

  <h3 className={[s.card_title, className].join(' ')}>
    { children }
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
