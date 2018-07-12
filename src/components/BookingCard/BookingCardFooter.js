import React from 'react';
import PropTypes from 'prop-types';

import s from './BookingCardFooter.css';

const BookingCardFooter = ({ leftActions, rightAction }) => (
  <div className={s.footer}>
    <div className={s.left}>
      {leftActions.map(action => action)}
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
