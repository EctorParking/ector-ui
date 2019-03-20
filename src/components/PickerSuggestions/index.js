import React from 'react';
import PropTypes from 'prop-types';
import { Arrow } from '..';
import s from './PickerSuggestions.css';

const PickerSuggestions = ({ visible, children, ...rest }) => (
  <div className={[s.container, visible ? s.visible : undefined].join(' ')} {...rest}>
    <div className={s.arrowContainer}>
      <Arrow position="top" className={[s.arrow, visible ? s.visible : undefined].join(' ')} />
    </div>
    {children}
  </div>
);

PickerSuggestions.defaultProps = {
  visible: true,
  children: null,
};

PickerSuggestions.propTypes = {
  visible: PropTypes.bool,
  children: PropTypes.arrayOf(PropTypes.element),
};

export default PickerSuggestions;
