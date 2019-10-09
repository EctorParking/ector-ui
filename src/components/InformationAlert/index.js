import React from 'react';
import PropTypes from 'prop-types';

import s from './InformationAlert.module.css';
import Icon from '../Icon';

const InformationAlert = ({
  className, classNameIcon, title, description,
}) => (
  <div className={[s.alert, className].join(' ')}>
    <span className={s.alertTitle}>
      <Icon
        name="ec-info"
        variant="none"
        className={s.alertIconContainer}
        iconClassName={classNameIcon}
      />
      {title}
    </span>
    <p className={s.alertDescription}>{description}</p>
  </div>
);

InformationAlert.defaultProps = {
  title: '',
  description: '',
  className: '',
  classNameIcon: '',
};

InformationAlert.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  className: PropTypes.string,
  classNameIcon: PropTypes.string,
};


export default InformationAlert;
