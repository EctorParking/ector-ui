import React from 'react';
import PropTypes from 'prop-types';
import s from './RewardCardContent.module.css';

const RewardCardContent = ({ children, className }) => (
  <div className={[s.content, className].join(' ')}>
    {children}
  </div>
);

RewardCardContent.propTypes = {
  children: PropTypes.node,
  className: PropTypes.node,
};

RewardCardContent.defaultProps = {
  children: null,
  className: undefined,
};


export default RewardCardContent;
