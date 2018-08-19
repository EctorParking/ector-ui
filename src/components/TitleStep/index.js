import React from 'react';
import PropTypes from 'prop-types';

import s from './TitleStep.css';

const TitleStep = ({
  Active,
  children,
  Done,
  onClick,
  className,
}) => {
  const classNameString = `
        ${s.step_button}
        ${Done ? s.done : ''}
        ${Active ? s.active : ''}
        ${className}
    `;

  return (
    <button
      className={classNameString}
      onClick={onClick}
    >
      { children }
    </button>
  );
};

TitleStep.defaultProps = {
  children: '',
  Done: false,
  className: '',
};

TitleStep.propTypes = {
  Active: PropTypes.bool.isRequired,
  children: PropTypes.node,
  Done: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string,
};


export default TitleStep;
