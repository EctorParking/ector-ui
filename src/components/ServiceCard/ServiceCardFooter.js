import React from 'react';
import PropTypes from 'prop-types';
import formatHtmlPrice from '../../Services/Utils';

import s from './ServiceCardFooter.css';
import LinkUnderline from '../LinkUnderlined';

const ServiceCardFooter = ({
  price,
  actionFooter,
  buttonLabelFooter,
  isSubscribed,
  key,
}) => (

  <div className={s.footerContainer}>
    <span
      className={s.price}
      /* eslint-disable no-undef */
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{
        __html: formatHtmlPrice(price, '€'),
      }}
    />
    {!isSubscribed && (
      <LinkUnderline
        onClick={actionFooter}
        testid={`serviceCard${key}`}
      >
        {buttonLabelFooter}
      </LinkUnderline>
    )}
    {isSubscribed && (
      <button
        testid={`serviceCard${key}Selected`}
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
  key: '',
};

ServiceCardFooter.propTypes = {
  price: PropTypes.number.isRequired,
  actionFooter: PropTypes.func.isRequired,
  buttonLabelFooter: PropTypes.string.isRequired,
  isSubscribed: PropTypes.bool.isRequired,
  key: PropTypes.string,
};

export default ServiceCardFooter;
