import React from 'react';
import PropTypes from 'prop-types';

import s from './ServiceCard.css';
import ServiceCardBody from './ServiceCardBody';
import ServiceCardFooter from './ServiceCardFooter';


const ServiceCard = ({
  className, contentClassName, image, title, description,
  price, actionFooter, openShowMore, isSubscribed, buttonLabelFooter,
}) => {
  const cardClassName = `
        ${s.card}
        ${className}
        ${isSubscribed ? s.optionCardContainerSelected : ''}
    `;

  return (
    <div className={cardClassName}>
      <ServiceCardBody
        image={image}
        title={title}
        description={description}
        openShowMore={openShowMore}
      />
      <ServiceCardFooter
        price={price}
        actionFooter={actionFooter}
        buttonLabelFooter={buttonLabelFooter}
        isSubscribed={isSubscribed}
      />
    </div>
  );
};

ServiceCard.defaultProps = {
  className: '',
  contentClassName: '',
  image: null,
  title: '',
  description: '',
  price: 0,
  openShowMore: () => {},
  isSubscribed: false,
};

ServiceCard.propTypes = {
  className: PropTypes.string,
  contentClassName: PropTypes.string,
  image: PropTypes.node,
  title: PropTypes.string,
  description: PropTypes.string,
  price: PropTypes.number,
  actionFooter: PropTypes.func.isRequired,
  openShowMore: PropTypes.func,
  isSubscribed: PropTypes.bool,
  buttonLabelFooter: PropTypes.string.isRequired,
};


export default ServiceCard;
