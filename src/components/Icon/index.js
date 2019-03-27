import React from 'react';
import PropTypes from 'prop-types';
import bgWhite from '../../images/watercolor_blanc.png';
import bgGrey from '../../images/watercolor_gris.png';
import bgBlue from '../../images/watercolor_bleu.png';
import bgYellow from '../../images/watercolor_jaune.png';
import bgMelrose from '../../images/watercolor_violet.png';
import s from './Icon.css';

const Backgrounds = {
  none: 'none',
  white: 'white',
  grey: 'grey',
  melrose: 'melrose',
  yellow: 'yellow',
  blue: 'blue',
};

const BackgroundImages = {
  [Backgrounds.none]: undefined,
  [Backgrounds.white]: bgWhite,
  [Backgrounds.grey]: bgGrey,
  [Backgrounds.yellow]: bgYellow,
  [Backgrounds.blue]: bgBlue,
  [Backgrounds.melrose]: bgMelrose,
};

const Positions = ['left', 'right', 'top', 'bottom'];

const IconComponent = ({
  src, name, children, className,
}) => {
  if (src) {
    return (
      <img src={src} alt="icon" className={className} />
    );
  }
  if (name) {
    return (
      <i className={[`icon icon-${name}`, className].join(' ')} />
    );
  }
  return children;
};

IconComponent.defaultProps = {
  src: undefined,
  name: undefined,
  children: undefined,
  className: null,
};

IconComponent.propTypes = {
  src: PropTypes.string,
  name: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.arrayOf(PropTypes.element),
};

const Icon = ({
  variant, position, src, name, children, IconComponent: Component, ...containerProps
}) => {
  const hasBackground = !!BackgroundImages[variant];

  return (
    <span {...containerProps}>
      {hasBackground
        ? (<img src={BackgroundImages[variant]} alt="icon background" className={s.background} />)
        : null
      }
      <Component
        src={src}
        name={name}
        className={[
          hasBackground ? s.withBackground : undefined,
          position ? s[position] : undefined,
        ].join(' ')}
      >
        {children}
      </Component>
    </span>
  );
};

Icon.defaultProps = {
  src: undefined,
  name: undefined,
  className: undefined,
  variant: Backgrounds.none,
  position: null,
  children: null,
  IconComponent,
};

Icon.propTypes = {
  src: PropTypes.string,
  name: PropTypes.string,
  className: PropTypes.string,
  variant: PropTypes.oneOf(Object.keys(Backgrounds)),
  position: PropTypes.oneOfType([null, PropTypes.oneOf(Positions)]),
  children: PropTypes.arrayOf(PropTypes.element),
  IconComponent: PropTypes.func,
};

export default Icon;
