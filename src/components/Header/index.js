import React from 'react';
import PropTypes from 'prop-types';
import { MenuButton, TextIcon } from '..';

import s from './Header.module.css';
import TextsType, { DefaultTexts } from './HeaderTextsType';

const DefaultRightComponent = ({ onClicks, texts, className }) => {
  const renderHelpButton = ({ isActive }) => (
    <TextIcon
      imageUrl="https://cdn.ectorparking.com/images/5ca2919a41b0f.svg"
      variant={isActive ? 'yellow' : 'white'}
      position="right"
    >
      {texts.needHelp}
    </TextIcon>
  );

  const renderConnectionButton = ({ isActive }) => (
    <TextIcon imageUrl="https://cdn.ectorparking.com/images/5ca291a60c49b.svg" variant={isActive ? 'yellow' : 'white'}>
      {texts.login}
    </TextIcon>
  );

  renderHelpButton.propTypes = {
    isActive: PropTypes.bool.isRequired,
  };

  renderConnectionButton.propTypes = {
    isActive: PropTypes.bool.isRequired,
  };

  const renderSuggestions = () => (
    <div className={s.helpSuggestions}>
      <button onClick={onClicks.faq} className={s.suggestion}>{texts.faq}</button>
      <button onClick={onClicks.customerService} className={s.suggestion}>
        {texts.customerService}
      </button>
    </div>
  );

  return (
    <div className={[s.menuItemsContainer, className].join(' ')}>
      <MenuButton LabelComponent={renderHelpButton} SuggestionsComponent={renderSuggestions} />
      <MenuButton LabelComponent={renderConnectionButton} onClick={onClicks.login} />
    </div>
  );
};

DefaultRightComponent.defaultProps = {
  onClicks: {},
  texts: DefaultTexts,
  className: undefined,
};

DefaultRightComponent.propTypes = {
  onClicks: PropTypes.shape({
    logo: PropTypes.func,
    login: PropTypes.func,
    faq: PropTypes.func,
    customerService: PropTypes.func,
    business: PropTypes.func,
  }),
  texts: TextsType,
  className: PropTypes.string,
};

const DefaultMiddleComponent = ({ onClicks, texts, className }) => {
  const renderBusinessButton = ({ isActive }) => (
    <TextIcon
      imageUrl="https://cdn.ectorparking.com/images/5ca29156f2bf9.svg"
      variant={isActive ? 'yellow' : 'melrose'}
      position="right"
    >
      {texts.business}
    </TextIcon>
  );

  renderBusinessButton.propTypes = {
    isActive: PropTypes.bool.isRequired,
  };

  return (
    <div className={[s.middleMenuItemsContainer, className].join(' ')}>
      <MenuButton LabelComponent={renderBusinessButton} onClick={onClicks.business} />
    </div>
  );
};

DefaultMiddleComponent.defaultProps = {
  onClicks: {},
  texts: DefaultTexts,
  className: undefined,
};

DefaultMiddleComponent.propTypes = {
  onClicks: PropTypes.shape({
    logo: PropTypes.func,
    login: PropTypes.func,
    faq: PropTypes.func,
    customerService: PropTypes.func,
    business: PropTypes.func,
  }),
  texts: TextsType,
  className: PropTypes.string,
};

const Header = ({
  className,
  containerClassName,
  logoClassName,
  middleComponentClassName,
  rightComponentClassName,
  LogoComponent,
  MiddleComponent,
  RightComponent,
  onClicks,
  texts,
}) => (
  <div className={[s.wrapper, className].join(' ')}>
    <div className={[s.container, containerClassName].join(' ')}>
      <LogoComponent onClick={onClicks.logo} className={logoClassName} />
      <MiddleComponent onClicks={onClicks} texts={texts} className={middleComponentClassName} />
      <RightComponent onClicks={onClicks} texts={texts} className={rightComponentClassName} />
    </div>
  </div>
);

Header.defaultProps = {
  className: undefined,
  containerClassName: undefined,
  logoClassName: undefined,
  middleComponentClassName: undefined,
  rightComponentClassName: undefined,
  LogoComponent: props => (
    <button {...props}>
      <img src="https://cdn.ectorparking.com/images/5ca29581d66b5.svg" alt="logo" />
    </button>
  ),
  MiddleComponent: DefaultMiddleComponent,
  RightComponent: DefaultRightComponent,
  onClicks: {},
  texts: DefaultTexts,
};

Header.propTypes = {
  LogoComponent: PropTypes.func,
  MiddleComponent: PropTypes.func,
  RightComponent: PropTypes.func,
  onClicks: PropTypes.shape({
    logo: PropTypes.func,
    login: PropTypes.func,
    faq: PropTypes.func,
    customerService: PropTypes.func,
    business: PropTypes.func,
  }),
  className: PropTypes.string,
  containerClassName: PropTypes.string,
  logoClassName: PropTypes.string,
  middleComponentClassName: PropTypes.string,
  rightComponentClassName: PropTypes.string,
  texts: TextsType,
};

export default Header;
