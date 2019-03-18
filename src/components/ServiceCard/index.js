import React from 'react';
import PropTypes from 'prop-types';

import s from './ServiceCard.css';
import ServiceCardBody from './ServiceCardBody';
import ServiceCardFooter from './ServiceCardFooter';
import Label from '../Label';


const ServiceCard = ({
  className, contentClassName, image, title, description,
  price, actionFooter, openShowMore, isSubscribed, buttonLabelFooter,
  labelText, labelLogo, labelColor, id, showButton, knowMoreLabel,
}) => {
  const cardClassName = `
        ${s.card}
        ${className}
        ${isSubscribed ? s.optionCardContainerSelected : ''}
    `;

  return (
    <div className={cardClassName}>
      {
        labelColor !== '' && labelLogo !== '' && labelText !== ''
        && (
          <Label
            logo={labelLogo}
            label={labelText}
            color={labelColor}
            className={s.labelContainer}
          />
        )
      }
      <ServiceCardBody
        image={image}
        title={title}
        description={description}
        openShowMore={openShowMore}
        knowMoreLabel={knowMoreLabel}
      />
      <ServiceCardFooter
        testid={`serviceCard${id}${isSubscribed ? 'Selected' : ''}`}
        price={price}
        actionFooter={actionFooter}
        buttonLabelFooter={buttonLabelFooter}
        isSubscribed={isSubscribed}
        showButton={showButton}
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
  labelText: '',
  labelLogo: '',
  labelColor: '',
  id: '',
  showButton: true,
  knowMoreLabel: 'En savoir plus',
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
  labelText: PropTypes.string,
  labelLogo: PropTypes.string,
  labelColor: PropTypes.string,
  id: PropTypes.string,
  showButton: PropTypes.bool,
  knowMoreLabel: PropTypes.string,
};

export default ServiceCard;
