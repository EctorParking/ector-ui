import React from 'react';
import PropTypes from 'prop-types';

import s from './InputLabel.module.css';

import Input from '../Input';
import Tooltip from '../Tooltip';

const InputLabel = ({
  label,
  id,
  mandatory,
  placeholder,
  type,
  className,
  inputClassName,
  error,
  left,
  children,
  InputComponent,
  LabelComponent,
  inputContainerClassName,
  LabelFooterComponent,
  errorClassName,
  onKeyDown,
  tooltip,
  tooltipIcon,
  ...inputProps
}) => {
  const labelClassName = mandatory ? s.mandatory : '';

  return (
    <div
      className={[left ? s.leftContainer : s.container, className].join(' ')}
    >
      {LabelComponent !== null &&
      typeof LabelComponent === 'function' &&
      LabelComponent() ? (
        <LabelComponent
          className={[left ? s.leftLabel : undefined, labelClassName].join(' ')}
        />
      ) : (
        <div className={s.label}>
          <label
            htmlFor={id}
            className={[left ? s.leftLabel : undefined, labelClassName].join(
              ' '
            )}
          >
            {label}
          </label>
          {tooltip && (
            <Tooltip
              text={tooltip}
              position="top"
              className={s.tooltip}
              iconClassName={tooltipIcon}
            />
          )}
        </div>
      )}
      {InputComponent !== null &&
      typeof InputComponent === 'function' &&
      InputComponent() ? (
        <InputComponent
          className={[s.input, inputClassName].join(' ')}
          placeholder={placeholder}
          type={type}
          hasError={!!error}
          {...inputProps}
        />
      ) : (
        <Input
          className={[s.input, inputClassName].join(' ')}
          id={id}
          placeholder={placeholder}
          type={type}
          hasError={!!error}
          onKeyDown={onKeyDown}
          {...inputProps}
        />
      )}
      {LabelFooterComponent !== null &&
      typeof LabelFooterComponent === 'function' &&
      LabelFooterComponent() &&
      !error ? (
        <LabelFooterComponent className={left ? s.leftText : undefined} />
      ) : (
        !!error && (
          <div
            className={[
              s.error,
              left ? s.leftText : undefined,
              errorClassName,
            ].join(' ')}
          >
            {error}
          </div>
        )
      )}
    </div>
  );
};

InputLabel.defaultProps = {
  id: undefined,
  mandatory: false,
  placeholder: '',
  className: '',
  inputClassName: '',
  error: null,
  left: false,
  children: null,
  InputComponent: null,
  LabelComponent: null,
  type: 'text',
  inputContainerClassName: '',
  LabelFooterComponent: null,
  errorClassName: '',
  tooltip: null,
  tooltipIcon: 'icon-ec-info',
  onKeyDown: () => {},
};

InputLabel.propTypes = {
  label: PropTypes.string.isRequired,
  id: PropTypes.string,
  mandatory: PropTypes.bool,
  placeholder: PropTypes.string,
  type: PropTypes.oneOf(['text', 'number', 'password', 'email']),
  className: PropTypes.string,
  inputClassName: PropTypes.string,
  inputContainerClassName: PropTypes.string,
  error: PropTypes.string,
  left: PropTypes.bool,
  children: PropTypes.node,
  InputComponent: PropTypes.func,
  LabelComponent: PropTypes.func,
  LabelFooterComponent: PropTypes.func,
  errorClassName: PropTypes.string,
  tooltip: PropTypes.string,
  tooltipIcon: PropTypes.string,
  onKeyDown: PropTypes.func,
};

export default InputLabel;
