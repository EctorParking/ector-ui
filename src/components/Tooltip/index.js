import React from 'react';
import PropTypes from 'prop-types';

import s from './Tooltip.css';

const Tooltip = ({
  iconClassName,
  text,
  className,
  tooltipClassName,
  position,
  tooltipWidth,
}) => {
  const computedTooltipClassName = [
    s.tooltipText,
    s[position],
    s[tooltipWidth],
    tooltipClassName,
  ];

  return (
    <div
      className={[s.tooltipContainer, className].join(' ')}
    >
      <i className={iconClassName} />
      <span className={computedTooltipClassName.join(' ')}>{text}</span>
    </div>
  );
};

Tooltip.defaultProps = {
  className: '',
  tooltipClassName: '',
  position: 'bottom',
  tooltipWidth: 'medium',
};

Tooltip.propTypes = {
  iconClassName: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  className: PropTypes.string,
  tooltipClassName: PropTypes.string,
  position: PropTypes.string,
  tooltipWidth: PropTypes.string,
};


export default Tooltip;
