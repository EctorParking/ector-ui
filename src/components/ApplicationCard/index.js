import React from 'react';
import PropTypes from 'prop-types';
import ApplicationCardUrlsType from './ApplicationCardUrlsType';
import playStoreImg from '../../assets/images/PlayStore.svg';
import appStoreImg from '../../assets/images/AppStore.svg';
import phoneImg from '../../assets/images/phone.png';

import s from './ApplicationCard.module.css';

const ApplicationCard = ({ title, description, urls, className }) => (
  <div className={`${s.applicationCard} ${className}`}>
    <div>
      <h2>{title}</h2>
      <p>{description}</p>

      <div className={s.icons}>
        <a href={urls.googlePlay}>
          <img src={playStoreImg} alt="Google Play" />
        </a>
        <a href={urls.appStore}>
          <img src={appStoreImg} alt="App Store" />
        </a>
      </div>
    </div>
    <div>
      <img src={phoneImg} alt="Phone" />
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
