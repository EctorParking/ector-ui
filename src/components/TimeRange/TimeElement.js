import React from 'react';
import PropTypes from 'prop-types';
import s from './TimeRange.css';

const TimeNumber = ({ value }) => (value < 10 ? `0${value}` : value);

const TimeElement = ({
  className, value, selected, onSelect,
}) => (
  // eslint-disable-next-line jsx-a11y/role-supports-aria-props
  <span
    className={[selected ? s.selected : undefined, className].join(' ')}
    role="presentation"
    onClick={onSelect}
    aria-selected={selected}
  >
    <TimeNumber value={value} />
  </span>
);

TimeElement.propTypes = {
  className: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  selected: PropTypes.bool.isRequired,
  onSelect: PropTypes.func.isRequired,
};

export default TimeElement;
