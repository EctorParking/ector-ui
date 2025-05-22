import React from 'react';
import Lottie from 'react-lottie';
import PropTypes from 'prop-types';
import Colors from '../../style/variable.global.css';
import s from './Loader.module.css';

const parseLoaderSize = size => {
  switch (size) {
    case 'xs':
      return 24;

    case 'sm':
      return 32;

    case 'md':
    default:
      return 40;

    case 'lg':
      return 60;

    case 'xl':
      return 120;
  }
};

const Loader = ({ size, className, testid, noPadding, visible }) => (
  <div testid={testid} className={[className, s[size]].join(' ')}>
    <Lottie
      options={{
        loop: true,
        autoplay: true,
        animationData: require('../../assets/lottie/loader.json'),
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice',
        },
      }}
      style={{
        color: Colors.primary,
        display: 'flex',
        alignSelf: 'center',
        justifyContent: 'center',
        margin: noPadding ? 'auto' : '1rem auto',
        maxHeight: parseLoaderSize(size),
        maxWidth: parseLoaderSize(size),
        zIndex: 1,
        opacity: visible ? 1 : 0,
      }}
    />
  </div>
);

Loader.defaultProps = {
  className: undefined,
  testid: undefined,
  size: 'md',
  noPadding: false,
  visible: true,
};

Loader.propTypes = {
  className: PropTypes.string,
  testid: PropTypes.string,
  size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
  noPadding: PropTypes.bool,
  visible: PropTypes.bool,
};

export default Loader;
