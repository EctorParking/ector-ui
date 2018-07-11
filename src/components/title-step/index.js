import React from 'react';
import PropTypes from 'prop-types';

import s from './title-step.css';

const TitleStep = ({
  Active, children, Done, onClick,
}) => {
  const className = `
        ${s.step_button} 
        ${Done ? s.done : ''} 
        ${Active ? s.active : ''}
    `;

  return (
    <button
      className={className}
      onClick={onClick}
    >
      { children }
    </button>
  );
};

TitleStep.defaultProps = {
  children: '',
  Done: false,
};

TitleStep.propTypes = {
  Active: PropTypes.bool.isRequired,
  children: PropTypes.node,
  Done: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
};


export default TitleStep;
