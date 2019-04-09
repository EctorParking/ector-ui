import React from 'react';
import Select from 'react-select';
import PropTypes from 'prop-types';
import s from './InputSelect.module.css';
import Colors from '../../style/variable.global.css';

const ectorTheme = theme => ({
  ...theme,
  colors: {
    ...theme.colors,
    primary: Colors.yellow,
    primary25: Colors.white,
    primary50: Colors.white,
    neutral20: Colors.metalGrey,
    neutral30: Colors.metalGrey,
    neutral40: Colors.metalGrey,
    neutral50: Colors.metalGrey,
    neutral60: Colors.deepBlue,
    neutral70: Colors.deepBlue,
    neutral80: Colors.deepBlue,
    neutral90: Colors.deepBlue,
  },
});

const ectorStyles = {
  option: (styles, { isSelected, isFocused }) => ({
    ...styles,
    color: Colors.deepBlue,
    fontWeight: isSelected || isFocused ? 'bold' : undefined,
    backgroundColor: Colors.white,
  }),
  control: styles => ({
    ...styles,
    borderWidth: 2,
  }),
};

const InputSelect = ({
  options, classname, onChange, value, ...props
}) => (
  <Select
    className={[s.select, classname].join(' ')}
    options={options}
    theme={ectorTheme}
    styles={ectorStyles}
    value={value}
    onChange={onChange}
    {...props}
  />
);

InputSelect.defaultProps = {
  options: [],
  classname: undefined,
  value: undefined,
};

InputSelect.propTypes = {
  options: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
  })),
  value: PropTypes.shape({
    value: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
  }),
  classname: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

export default InputSelect;
