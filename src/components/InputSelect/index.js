import React from 'react';
import Select from 'react-select';
import PropTypes from 'prop-types';
import s from './InputSelect.module.css';

const ectorTheme = theme => ({
  ...theme,
  colors: {
    ...theme.colors,
    primary: '#ffcd02',
    primary25: '#fefefe',
    primary50: '#fefefe',
    neutral20: '#d5d6d7',
    neutral30: '#d5d6d7',
    neutral40: '#d5d6d7',
    neutral50: '#d5d6d7',
    neutral60: '#163457',
    neutral70: '#163457',
    neutral80: '#163457',
    neutral90: '#163457',
  },
});

const ectorStyles = {
  option: (styles, { isSelected, isFocused }) => ({
    ...styles,
    color: '#163457',
    fontWeight: isSelected || isFocused ? 'bold' : undefined,
    backgroundColor: '#fefefe',
  }),
};

const InputSelect = ({ options, classname, ...props }) => (
  <Select
    className={[s.select, classname].join(' ')}
    options={options}
    theme={ectorTheme}
    styles={ectorStyles}
    {...props}
  />
);

InputSelect.defaultProps = {
  options: [],
  classname: undefined,
};

InputSelect.propTypes = {
  options: PropTypes.arrayOf({
    value: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
  }),
  classname: PropTypes.string,
};

export default InputSelect;
