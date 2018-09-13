import React from 'react';
import PropTypes from 'prop-types';

import s from './BookingCardFooter.css';

const renderLeftAction = (leftAction, index) => {
  const ActionElement = () => leftAction;

  return <ActionElement key={index} />;
};

const BookingCardFooter = ({ leftActions, rightAction }) => (
  <div className={s.footer}>
    <div className={s.left}>
      {leftActions.map(renderLeftAction)}
    </div>
    <div>
      {rightAction}
    </div>
  </div>
);

BookingCardFooter.defaultProps = {
  leftActions: [],
  rightAction: null,
};

BookingCardFooter.propTypes = {
  leftActions: PropTypes.arrayOf(PropTypes.node),
  rightAction: PropTypes.node,
};

export default BookingCardFooter;
