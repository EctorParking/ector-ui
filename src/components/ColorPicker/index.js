import React from 'react';
import PropTypes from 'prop-types';

import s from './ColorPicker.css';

const ColorPicker = ({
  colorsList,
  onSelect,
  className,
}) => (
  <div className={`${s.colorPicker} ${className}`}>
    {colorsList.map(color => (
      <button
        key={`color-${color.label}`}
        className={`${s.badge} ${color.hexadecimalCode === 'transparent' ? s.transparent : ''}`}
        style={{ backgroundColor: color.hexadecimalCode }}
        title={color.label}
        onClick={() => onSelect(color)}
      />
    ))}
  </div>
);

ColorPicker.defaultProps = {
  className: '',
};

ColorPicker.propTypes = {
  colorsList: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string,
    hexadecimalCode: PropTypes.string,
  })).isRequired,
  onSelect: PropTypes.func.isRequired,
  className: PropTypes.string,
};

export default ColorPicker;
