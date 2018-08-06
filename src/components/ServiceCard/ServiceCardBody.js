import React from 'react';
import wordwrap from 'wordwrap';
import PropTypes from 'prop-types';

import s from './ServiceCardBody.css';

const ServiceCardBody = ({
  image,
  title,
  description,
  contentClassName,
  openShowMore,
}) => {
  let descriptionFormatted = description;
  let showKnowMoreLink = false;

  if (description.length > 70) {
    descriptionFormatted = wordwrap(65)(descriptionFormatted);
    descriptionFormatted = descriptionFormatted.substring(0, descriptionFormatted.indexOf('\n'));
    showKnowMoreLink = true;
  }

  return (
    <div className={`${s.card_content} ${contentClassName}`}>
      {image}
      <h2 className={s.title}>{title}</h2>
      <span
        className={`${s.description} ${
          showKnowMoreLink ? s.punctuationKnowMore : ''
        }`}
      >
        {descriptionFormatted}
      </span>
      {showKnowMoreLink && (
        <button
          className={s.knowMore}
          onClick={openShowMore}
          type="button"
        >
          <span>knowMore</span>
        </button>
      )}
    </div>
  );
};

ServiceCardBody.defaultProps = {
  image: null,
  contentClassName: '',
  openShowMore: () => {},
};

ServiceCardBody.propTypes = {
  image: PropTypes.node,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  contentClassName: PropTypes.string,
  openShowMore: PropTypes.func,
};

export default ServiceCardBody;
