import React from 'react';
import PropTypes from 'prop-types';

import s from './Tooltip.module.css';

const Tooltip = ({
  iconClassName,
  text,
  className,
  tooltipClassName,
  position,
  tooltipSize,
  IconComponent,
  visible,
}) => {
  const computedTooltipClassName = [
    s.tooltipText,
    s[position],
    s[tooltipSize],
    tooltipClassName,
    visible ? s.visibleTooltip : s.hiddenTooltip,
  ];

  return (
    <div
      className={[s.tooltipContainer, className].join(' ')}
    >
      {
        IconComponent !== null && typeof IconComponent === 'function' && IconComponent() ? (
          <IconComponent />
        ) : (
          <i className={iconClassName} />
        )
      }
      <span className={computedTooltipClassName.join(' ')}>{text}</span>
    </div>
  );
};

Tooltip.defaultProps = {
  className: '',
  tooltipClassName: '',
  position: 'bottom',
  tooltipSize: 'medium',
  IconComponent: null,
  iconClassName: '',
  visible: false,
};

Tooltip.propTypes = {
  iconClassName: PropTypes.string,
  text: PropTypes.string.isRequired,
  className: PropTypes.string,
  tooltipClassName: PropTypes.string,
  position: PropTypes.oneOf(['left', 'top', 'right', 'bottom']),
  tooltipSize: PropTypes.oneOf(['xSmall', 'small', 'medium', 'large']),
  IconComponent: PropTypes.func,
  visible: PropTypes.bool,
};


export default Tooltip;
