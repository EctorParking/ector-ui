import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Colors, { ColorPropsType } from './Colors';

import s from './ColorPicker.css';

class ColorPicker extends PureComponent {
  renderColorBadge = (color) => {
    const {
      onSelect, tooltipClassName, showTooltip, value, badgeClassName,
    } = this.props;
    const tooltipContainerClassName = showTooltip ? s.tooltip : '';
    const badgeClassNames = [
      s.badge,
      color.hexadecimalCode === 'transparent' ? s.transparent : '',
      value === color.hexadecimalCode ? s.badgeSelected : '',
      badgeClassName,
    ];

    return (
      <div className={tooltipContainerClassName}>
        <button
          key={`color-${color.label}`}
          className={badgeClassNames.join(' ')}
          style={{ backgroundColor: color.hexadecimalCode }}
          title={color.label}
          onClick={() => onSelect(color)}
        />
        <span className={[s.tooltipText, tooltipClassName].join(' ')}>{color.label}</span>
      </div>
    );
  };

  render() {
    const {
      colorsList, className,
    } = this.props;

    return (
      <div className={[s.colorPicker, className].join(' ')}>
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
};

ColorPicker.propTypes = {
  showTooltip: PropTypes.bool,
  badgeClassName: PropTypes.string,
  tooltipClassName: PropTypes.string,
  className: PropTypes.string,
  colorsList: PropTypes.arrayOf(ColorPropsType),
  onSelect: PropTypes.func.isRequired,
  value: PropTypes.string,
};

export default ColorPicker;
