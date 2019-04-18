import React from 'react';
import PropTypes from 'prop-types';
import { MenuButton, TextIcon } from '..';
import faqIcon from '../../assets/images/faqIcon.svg';
import businessIcon from '../../assets/images/businessIcon.svg';
import headIcon from '../../assets/images/headIcon.svg';
import logoEctor from '../../assets/images/logoEctor.svg';
import s from './Header.module.css';
import TextsType, { DefaultTexts } from './HeaderTextsType';

const DefaultRightComponent = ({ texts, className }) => {
  const renderHelpButton = ({ isActive }) => (
    <TextIcon
      imageUrl={faqIcon}
      variant={isActive ? 'yellow' : 'white'}
      position="right"
    >
      {texts.needHelp}
    </TextIcon>
  );

  const renderConnectionButton = ({ isActive }) => (
    <TextIcon imageUrl={headIcon} variant={isActive ? 'yellow' : 'white'}>
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
      <button className={s.suggestion}>{texts.faq}</button>
      <button className={s.suggestion}>
        {texts.customerService}
      </button>
    </div>
  );

  return (
    <div className={[s.menuItemsContainer, className].join(' ')}>
      <MenuButton LabelComponent={renderHelpButton} SuggestionsComponent={renderSuggestions} />
      <MenuButton LabelComponent={renderConnectionButton} />
    </div>
  );
};

DefaultRightComponent.defaultProps = {
  texts: DefaultTexts,
  className: undefined,
};

DefaultRightComponent.propTypes = {
  texts: TextsType,
  className: PropTypes.string,
};

const DefaultMiddleComponent = ({ texts, className }) => {
  const renderBusinessButton = ({ isActive }) => (
    <TextIcon
      imageUrl={businessIcon}
      variant={isActive ? 'yellow' : 'melrose'}
      position="right"
    >
      {texts.business}
    </TextIcon>
  );

  renderBusinessButton.propTypes = {
    isActive: PropTypes.bool.isRequired,
  };

  // eslint-disable-next-line
  const onClick = () => window.open('https://business.ectorparking.com', '_blank');

  return (
    <div className={[s.middleMenuItemsContainer, className].join(' ')}>
      <MenuButton LabelComponent={renderBusinessButton} onClick={onClick} />
    </div>
  );
};

DefaultMiddleComponent.defaultProps = {
  texts: DefaultTexts,
  className: undefined,
};

DefaultMiddleComponent.propTypes = {
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
  texts,
  onClickLogo,
}) => (
  <div className={[s.wrapper, className].join(' ')}>
    <div className={[s.container, containerClassName].join(' ')}>
      <LogoComponent className={logoClassName} onClick={onClickLogo} />
      <MiddleComponent texts={texts} className={middleComponentClassName} />
      <RightComponent texts={texts} className={rightComponentClassName} />
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
      <img src={logoEctor} alt="logo" />
    </button>
  ),
  MiddleComponent: DefaultMiddleComponent,
  RightComponent: DefaultRightComponent,
  texts: DefaultTexts,
  onClickLogo: () => null,
};

Header.propTypes = {
  LogoComponent: PropTypes.func,
  MiddleComponent: PropTypes.func,
  RightComponent: PropTypes.func,
  className: PropTypes.string,
  containerClassName: PropTypes.string,
  logoClassName: PropTypes.string,
  middleComponentClassName: PropTypes.string,
  rightComponentClassName: PropTypes.string,
  texts: TextsType,
  onClickLogo: PropTypes.func,
};

export default Header;
