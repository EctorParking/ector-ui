import React from 'react';
import PropTypes from 'prop-types';
import s from './TimeRange.module.css';

export const TimeNumber = ({ value }) => (value < 10 ? `0${value}` : value.toString());

const TimeElement = ({
  className, value, selected, onSelect, disabled,
}) => (
  // eslint-disable-next-line jsx-a11y/role-supports-aria-props
  <div
    className={[selected ? s.selected : undefined, disabled ? s.disabled : undefined, className].join(' ')}
    role="presentation"
    onClick={onSelect}
    aria-selected={selected}
  >
    <TimeNumber value={value} />
  </div>
);

TimeElement.propTypes = {
  className: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
  selected: PropTypes.bool.isRequired,
  onSelect: PropTypes.func.isRequired,
  disabled: PropTypes.bool.isRequired,
};

export default TimeElement;
