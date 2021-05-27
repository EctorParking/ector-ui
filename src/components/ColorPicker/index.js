import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Colors, { ColorPropsType } from './Colors';

import s from './ColorPicker.module.css';
import { Tooltip } from '..';

class ColorPicker extends PureComponent {
  renderColorBadge = (color, index) => {
    const {
      onSelect,
      tooltipClassName,
      showTooltip,
      value,
      badgeClassName,
      tooltipSize,
    } = this.props;
    const tooltipContainerClassName = showTooltip ? s.tooltip : '';
    const badgeClassNames = [
      s.badge,
      color.hexadecimalCode === 'transparent' ? s.transparent : '',
      value === color.hexadecimalCode ? s.badgeSelected : '',
      badgeClassName,
    ];

    return (
      <Tooltip
        text={color.label}
        className={tooltipContainerClassName}
        tooltipClassName={[s.tooltipText, tooltipClassName].join(' ')}
        tooltipSize={tooltipSize}
        IconComponent={() => (
          <button
            key={`color-${color.label}`}
            className={badgeClassNames.join(' ')}
            style={{ backgroundColor: color.hexadecimalCode }}
            title={color.label}
            onClick={() => onSelect(color)}
            id={`color${index}`}
          />
        )}
      />
    );
  };

  render() {
    const { colorsList, className, testid } = this.props;

    return (
      <div className={[s.colorPicker, className].join(' ')} testid={testid}>
        {colorsList.map(this.renderColorBadge)}
      </div>
    );
  }
}

ColorPicker.defaultProps = {
  colorsList: Colors,
  className: '',
  tooltipClassName: '',
  showTooltip: true,
  value: '',
  badgeClassName: '',
  testid: '',
  tooltipSize: 'xSmall',
};

ColorPicker.propTypes = {
  showTooltip: PropTypes.bool,
  badgeClassName: PropTypes.string,
  tooltipClassName: PropTypes.string,
  tooltipSize: PropTypes.oneOf(['xSmall', 'small', 'medium', 'large']),
  className: PropTypes.string,
  colorsList: PropTypes.arrayOf(ColorPropsType),
  onSelect: PropTypes.func.isRequired,
  value: PropTypes.string,
  testid: PropTypes.string,
};

export default ColorPicker;
