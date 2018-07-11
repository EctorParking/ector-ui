import React from 'react';
import PropTypes from 'prop-types';

import s from './ActionLink.css';

const ActionLink = ({ icon, label, onClick }) => {
  const labelStyle = icon ? s.labelWithIcon : s.labelWithoutIcon;

  return (
    <button
      className={s.container}
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
  onClick: () => {},
};

ActionLink.propTypes = {
  icon: PropTypes.string,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};


export default ActionLink;
