import React from 'react';
import PropTypes from 'prop-types';
import s from './RewardCardContent.module.css';

const RewardCardContent = ({ children }) => (
  <div className={s.content}>
    {children}
  </div>
);

RewardCardContent.propTypes = {
  children: PropTypes.node,
};

RewardCardContent.defaultProps = {
  children: null,
};


export default RewardCardContent;
