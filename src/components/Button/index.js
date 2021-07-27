import React from 'react';
import PropTypes from 'prop-types';
import Loader from '../Loader';
import s from './Button.module.css';

const Button = ({
  children,
  href,
  to,
  type,
  title,
  component,
  onClick,
  className,
  fetching,
  disabled,
}) => {
  const props = {
    className: [s.button, fetching ? s.fetching : '', className].join(' '),
    ...(!fetching && onClick ? { onClick } : {}),
    ...(type ? { type } : {}),
    ...(href ? { href } : {}),
    ...(to ? { to } : {}),
    ...(disabled ? { disabled } : {}),
    title,
  };

  const Element = onClick || type !== '' ? 'button' : component;

  return (
    <Element {...props}>
      <span>
        <Loader size="sm" className={s.buttonLoader} visible={fetching} noPadding />
        {!fetching && children}
      </span>
    </Element>
  );
};

Button.defaultProps = {
  href: '#',
  onClick: null,
  to: '',
  type: '',
  className: '',
  fetching: false,
  disabled: false,
  component: 'a',
  title: undefined,
};

Button.propTypes = {
  href: PropTypes.string,
  onClick: PropTypes.func,
  to: PropTypes.string,
  type: PropTypes.string,
  title: PropTypes.string,
  className: PropTypes.string,
  fetching: PropTypes.bool,
  disabled: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  component: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
};

export default Button;
