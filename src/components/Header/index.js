import React from 'react';
import PropTypes from 'prop-types';
import { MenuButton, TextIcon } from '..';

import s from './Header.module.css';

const DefaultRightComponent = ({ onClicks }) => {
  const renderHelpButton = ({ isActive }) => (
    <TextIcon
      imageUrl="https://cdn.ectorparking.com/images/5ca2919a41b0f.svg"
      variant={isActive ? 'yellow' : 'white'}
      position="right"
    >
      Besoin d'aide ?
    </TextIcon>
  );

  const renderConnectionButton = ({ isActive }) => (
    <TextIcon imageUrl="https://cdn.ectorparking.com/images/5ca291a60c49b.svg" variant={isActive ? 'yellow' : 'white'}>
      Connexion
    </TextIcon>
  );

  const renderSuggestions = () => (
    <div className={s.helpSuggestions}>
      <button onClick={onClicks.faq} className={s.suggestion}>Questions fréquentes</button>
      <button onClick={onClicks.customerService} className={s.suggestion}>Service client</button>
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
};

DefaultRightComponent.propTypes = {
  onClicks: PropTypes.shape({
    logo: PropTypes.func,
    login: PropTypes.func,
    faq: PropTypes.func,
    customerService: PropTypes.func,
    business: PropTypes.func,
  }),
};

const DefaultMiddleComponent = ({ onClicks }) => {
  const renderBusinessButton = ({ isActive }) => (
    <TextIcon
      imageUrl="https://cdn.ectorparking.com/images/5ca29156f2bf9.svg"
      variant={isActive ? 'yellow' : 'melrose'}
      position="right"
    >
      Ector Business
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
};

DefaultMiddleComponent.propTypes = {
  onClicks: PropTypes.shape({
    logo: PropTypes.func,
    login: PropTypes.func,
    faq: PropTypes.func,
    customerService: PropTypes.func,
    business: PropTypes.func,
  }),
};

const Header = ({
  className,
  containerClassName,
  LogoComponent,
  MiddleComponent,
  RightComponent,
  onClicks,
}) => (
  <div className={[s.wrapper, className].join(' ')}>
    <div className={[s.container, containerClassName].join(' ')}>
      <LogoComponent onClick={onClicks.logo} />
      <MiddleComponent onClicks={onClicks} />
      <RightComponent onClicks={onClicks} />
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
};

export default Header;
