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
  id,
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
        testid={`serviceCard${id}`}
      >
        {buttonLabelFooter}
      </LinkUnderline>
    )}
    {isSubscribed && (
      <button
        testid={`serviceCard${id}Selected`}
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
  id: '',
};

ServiceCardFooter.propTypes = {
  price: PropTypes.number.isRequired,
  actionFooter: PropTypes.func.isRequired,
  buttonLabelFooter: PropTypes.string.isRequired,
  isSubscribed: PropTypes.bool.isRequired,
  id: PropTypes.string,
};

export default ServiceCardFooter;
