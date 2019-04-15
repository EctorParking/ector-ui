import React from 'react';
import PropTypes from 'prop-types';
import { MenuButton, TextIcon } from '..';

import s from './Header.module.css';
import TextsType, { DefaultTexts } from './HeaderTextsType';

const DefaultRightComponent = ({ onClicks, texts }) => {
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

  const renderSuggestions = () => (
    <div className={s.helpSuggestions}>
      <button onClick={onClicks.faq} className={s.suggestion}>{texts.faq}</button>
      <button onClick={onClicks.customerService} className={s.suggestion}>
        {texts.customerService}
      </button>
    </div>
  );

  return (
    <div className={s.menuItemsContainer}>
      <MenuButton LabelComponent={renderHelpButton} SuggestionsComponent={renderSuggestions} />
      <MenuButton LabelComponent={renderConnectionButton} onClick={onClicks.login} />
    </div>
  );
};

DefaultRightComponent.defaultProps = {
  onClicks: {},
  texts: DefaultTexts,
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
};

const DefaultMiddleComponent = ({ onClicks, texts }) => {
  const renderBusinessButton = ({ isActive }) => (
    <TextIcon
      imageUrl="https://cdn.ectorparking.com/images/5ca29156f2bf9.svg"
      variant={isActive ? 'yellow' : 'melrose'}
      position="right"
    >
      {texts.business}
    </TextIcon>
  );

  return (
    <div className={s.middleMenuItemsContainer}>
      <MenuButton LabelComponent={renderBusinessButton} onClick={onClicks.business} />
    </div>
  );
};

DefaultMiddleComponent.defaultProps = {
  onClicks: {},
  texts: DefaultTexts,
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
};

const Header = ({
  className,
  containerClassName,
  LogoComponent,
  MiddleComponent,
  RightComponent,
  onClicks,
  texts,
}) => (
  <div className={[s.wrapper, className].join(' ')}>
    <div className={[s.container, containerClassName].join(' ')}>
      <LogoComponent onClick={onClicks.logo} />
      <MiddleComponent onClicks={onClicks} texts={texts} />
      <RightComponent onClicks={onClicks} texts={texts} />
    </div>
  </div>
);

Header.defaultProps = {
  className: undefined,
  containerClassName: undefined,
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
  texts: TextsType,
};

export default Header;
