import React from 'react';
import Select, { createFilter } from 'react-select';
import PropTypes from 'prop-types';
import s from './InputSelect.module.css';
import Colors from '../../style/variable.global.css';

const ectorTheme = theme => ({
  ...theme,
  colors: {
    ...theme.colors,
    text: Colors.primary,
    primary: Colors.neutral,
  },
});

const InputSelect = ({
  options,
  classname,
  onChange,
  onOpen,
  value,
  error,
  modal,
  ...props
}) => {
  const ectorStyles = {
    menu: styles => ({
      ...styles,
      borderRadius: 30,
      overflow: 'hidden',
    }),
    menuPortal: styles => ({
      ...styles,
      zIndex: 9999,
    }),
    option: (styles, { isSelected, isFocused }) => ({
      ...styles,
      color: Colors.primary,
      fontWeight: isSelected || isFocused ? 'bold' : undefined,
      backgroundColor: Colors.white,
    }),
    control: styles => ({
      ...styles,
      'borderColor': error ? Colors.error : Colors.neutral,
      'borderRadius': 30,
      'borderWidth': 1,
      'boxShadow': 'none',
      '&:hover': {
        borderColor: error ? Colors.error : styles.borderColor,
      },
    }),
  };

  const modalProps = modal
    ? {
        menuPosition: 'absolute',
        menuPlacement: 'auto',
        // eslint-disable-next-line no-undef
        menuPortalTarget: document.body,
      }
    : {};

  return (
    <Select
      className={[s.select, classname].join(' ')}
      options={options}
      theme={ectorTheme}
      styles={ectorStyles}
      value={value}
      onChange={onChange}
      onMenuOpen={onOpen}
      filterOption={createFilter({ ignoreAccents: false })} // https://github.com/JedWatson/react-select/issues/3128#issuecomment-487256349
      {...modalProps}
      {...props}
    />
  );
};

InputSelect.defaultProps = {
  options: [],
  classname: undefined,
  value: undefined,
  error: null,
  modal: false,
};

InputSelect.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ),
  value: PropTypes.shape({
    value: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
  }),
  error: PropTypes.string,
  classname: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  onOpen: PropTypes.func,
  modal: PropTypes.bool,
};

export default InputSelect;
