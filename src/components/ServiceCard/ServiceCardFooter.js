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
  testid,
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
        testid={testid}
      >
        {buttonLabelFooter}
      </LinkUnderline>
    )}
    {isSubscribed && (
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
};

ServiceCardFooter.propTypes = {
  price: PropTypes.number.isRequired,
  actionFooter: PropTypes.func.isRequired,
  buttonLabelFooter: PropTypes.string.isRequired,
  isSubscribed: PropTypes.bool.isRequired,
  testid: PropTypes.string,
};

export default ServiceCardFooter;
