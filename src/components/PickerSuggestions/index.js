import React from 'react';
import PropTypes from 'prop-types';
import { Arrow } from '..';
import s from './PickerSuggestions.css';

const PickerSuggestions = ({
  visible, children, className, ArrowComponent, ...rest
}) => (
  <div className={[s.container, visible ? s.visible : undefined, className].join(' ')} {...rest}>
    <div className={s.arrowContainer}>
      <ArrowComponent position="top" className={[s.arrow, visible ? s.visible : undefined].join(' ')} />
    </div>
    {children}
  </div>
);

PickerSuggestions.defaultProps = {
  visible: true,
  children: null,
  className: undefined,
  ArrowComponent: props => <Arrow {...props} />,
};

PickerSuggestions.propTypes = {
  visible: PropTypes.bool,
  children: PropTypes.any, // eslint-disable-line
  className: PropTypes.string,
  ArrowComponent: PropTypes.func,
};

export default PickerSuggestions;
