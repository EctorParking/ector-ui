import React from 'react';
import PropTypes from 'prop-types';

import s from './ServiceCardFooter.css';
import LinkUnderline from '../LinkUnderlined';

const ServiceCardFooter = ({
  price,
  actionFooter,
  buttonLabelFooter,
  isSubscribed,
}) => (

  <div className={s.footerContainer}>
    <span
      className={s.price}
      /* eslint-disable no-undef */
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{
        __html: [price, '€'].join(''),
      }}
    />
    {!isSubscribed && (
      <LinkUnderline
        onClick={actionFooter}
      >
        {buttonLabelFooter}
      </LinkUnderline>
    )}
    {isSubscribed && (
      <button
        className={s.deleteButton}
        onClick={actionFooter}
        type="button"
      >
        {buttonLabelFooter}
      </button>
    )}
  </div>

);

ServiceCardFooter.propTypes = {
  price: PropTypes.number.isRequired,
  actionFooter: PropTypes.func.isRequired,
  buttonLabelFooter: PropTypes.string.isRequired,
  isSubscribed: PropTypes.bool.isRequired,
};

export default ServiceCardFooter;
