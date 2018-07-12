import React from 'react';
import PropTypes from 'prop-types';

import s from './CardTitle.css';

const CardTitle = ({ children }) => (

  <h3 className={s.card_title}>
    { children }
  </h3>
);

CardTitle.propTypes = {
  children: PropTypes.node.isRequired,
};


export default CardTitle;
