import React from 'react';
import PropTypes from 'prop-types';
import { Arrow } from '..';
import s from './PickerSuggestions.module.css';

const PickerSuggestions = ({
  visible,
  children,
  className,
  ArrowComponent,
  split,
  containerOffset,
  ...rest
}) => (
  <div
    className={[
      s.container,
      visible ? s.visible : undefined,
      split ? s.splitContainer : undefined,
      className,
    ].join(' ')}
    style={{ left: `calc(50% - ${containerOffset + 130}px)` }}
    {...rest}
  >
    <div className={s.arrowContainer} style={{ left: `${containerOffset}px` }}>
      <ArrowComponent
        position="top"
        className={[s.arrow, visible ? s.visible : undefined].join(' ')}
      />
    </div>
    {children}
  </div>
);

PickerSuggestions.defaultProps = {
  visible: true,
  split: false,
  children: null,
  className: undefined,
  ArrowComponent: props => <Arrow {...props} />,
  containerOffset: 0,
};

PickerSuggestions.propTypes = {
  visible: PropTypes.bool,
  children: PropTypes.any, // eslint-disable-line
  className: PropTypes.string,
  ArrowComponent: PropTypes.func,
  split: PropTypes.bool,
  containerOffset: PropTypes.number,
};

export default PickerSuggestions;
