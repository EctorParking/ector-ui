import React from 'react';
import PropTypes from 'prop-types';

import s from './ServiceCardFooter.module.css';
import LinkUnderline from '../LinkUnderlined';

const ServiceCardFooter = ({
  PriceComponent,
  actionFooter,
  buttonLabelFooter,
  isSubscribed,
  testid,
  showButton,
}) => (
  <div className={s.footerContainer}>
    <span className={s.price}>{PriceComponent}</span>
    {!isSubscribed && (
      <LinkUnderline onClick={actionFooter} testid={testid}>
        {buttonLabelFooter}
      </LinkUnderline>
    )}
    {isSubscribed && showButton && (
      <button
        testid={testid}
        className={s.deleteButton}
        onClick={actionFooter}
        type="button"
      >
        {buttonLabelFooter}
      </button>
    )}
  </div>
);

ServiceCardFooter.defaultProps = {
  testid: '',
  showButton: true,
};

ServiceCardFooter.propTypes = {
  PriceComponent: PropTypes.node.isRequired,
  actionFooter: PropTypes.func.isRequired,
  buttonLabelFooter: PropTypes.string.isRequired,
  isSubscribed: PropTypes.bool.isRequired,
  testid: PropTypes.string,
  showButton: PropTypes.bool,
};

export default ServiceCardFooter;
