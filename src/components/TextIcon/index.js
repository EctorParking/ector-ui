import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from '..';

import s from './TextIcon.module.css';

const TextIcon = ({
  children,
  imageUrl,
  className,
  iconClassName,
  ...iconProps
}) => (
  <div className={[s.container, className].join(' ')}>
    <Icon
      src={imageUrl}
      className={[s.icon, iconClassName].join(' ')}
      {...iconProps}
    />
    {children}
  </div>
);

TextIcon.defaultProps = {
  className: undefined,
  iconClassName: undefined,
};

TextIcon.propTypes = {
  children: PropTypes.node.isRequired,
  imageUrl: PropTypes.string.isRequired,
  className: PropTypes.string,
  iconClassName: PropTypes.string,
};

export default TextIcon;
