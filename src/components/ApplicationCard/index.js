import React from 'react';
import PropTypes from 'prop-types';
import ApplicationCardUrlsType from './ApplicationCardUrlsType';

import s from './ApplicationCard.css';

const ApplicationCard = ({
  title,
  description,
  urls,
  className,
}) => (
  <div className={`${s.applicationCard} ${className}`}>
    <div>
      <h2>{title}</h2>
      <p>{description}</p>

      <div className={s.icons}>
        <a href={urls.googlePlay}>
          <img
            src="images/disponible-sur-googleplay.png"
            alt="Google Play"
          />
        </a>
        <a href={urls.appStore}>
          <img
            src="images/disponible-sur-appstore.png"
            alt="App Store"
          />
        </a>
      </div>
    </div>
    <div>
      <img
        src="images/phone.png"
        alt="Phone"
      />
    </div>
  </div>
);

ApplicationCard.defaultProps = {
  className: '',
};

ApplicationCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  urls: ApplicationCardUrlsType.isRequired,
  className: PropTypes.string,
};

export default ApplicationCard;
