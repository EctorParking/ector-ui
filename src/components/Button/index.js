import React from 'react';
import PropTypes from 'prop-types';
import s from './Button.css';

const Button = ({
  animationDuration,
  fetchingDelay,
  children,
  href,
  type,
  title,
  component,
  onClick,
  className,
  fetching,
  disabled,
}) => {
  const props = {
    className: [
      s.button,
      fetching ? s.fetching : '',
      className,
    ].join(' '),
    ...(onClick ? { onClick } : {}),
    ...(type ? { type } : {}),
    ...(href ? { to: href } : {}),
    ...(disabled ? { disabled } : {}),
    title,
  };

  const Element = onClick || type !== '' ? 'button' : component;

  return (
    <Element {...props}>
      <span
        className={[s.track, fetching ? s.fetchingTrack : ''].join(' ')}
        style={{
          animationDuration: `${animationDuration}s`,
          animationDelay: fetching ? `${fetchingDelay}s` : '',
        }}
      />
      <span>{children}</span>
    </Element>
  );
};

Button.defaultProps = {
  animationDuration: 1.5,
  fetchingDelay: 0.5,
  href: '#',
  onClick: null,
  type: '',
  className: '',
  fetching: false,
  disabled: false,
  component: 'a',
};

Button.propTypes = {
  animationDuration: PropTypes.number,
  fetchingDelay: PropTypes.number,
  href: PropTypes.string,
  onClick: PropTypes.func,
  type: PropTypes.string,
  title: PropTypes.string.isRequired,
  className: PropTypes.string,
  fetching: PropTypes.bool,
  disabled: PropTypes.bool,
  children: PropTypes.string.isRequired,
  component: PropTypes.oneOf([PropTypes.string, PropTypes.node]),
};

export default Button;
