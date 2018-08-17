import React from 'react';
import PropTypes from 'prop-types';

import s from './ActionLink.css';

const ActionLink = ({
  icon, label, onClick, className,
}) => {
  const labelStyle = icon ? s.labelWithIcon : s.labelWithoutIcon;

  return (
    <button
      className={[s.container, className].join(' ')}
      onClick={onClick}
    >
      { icon && <i className={`icon-${icon}`} /> }

      <span className={`${s.commonLabelStyle} ${labelStyle}`}>
        { label }
      </span>
    </button>
  );
};

ActionLink.defaultProps = {
  icon: '',
  className: '',
  onClick: () => {},
};

ActionLink.propTypes = {
  icon: PropTypes.string,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  className: PropTypes.string,
};


export default ActionLink;
