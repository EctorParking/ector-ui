import React from 'react';
import PropTypes from 'prop-types';
import { MenuButton, TextIcon } from '..';
import faqIcon from '../../assets/images/faqIcon.svg';
import businessIcon from '../../assets/images/businessIcon.svg';
import headIcon from '../../assets/images/headIcon.svg';
import logoEctor from '../../assets/images/logoEctor.svg';
import s from './Header.module.css';
import TextsType, { DefaultTexts } from './HeaderTextsType';

const DefaultRightComponent = ({ texts, className, disabledButtons }) => {
  const renderHelpButton = ({ isActive }) => (
    <TextIcon
      imageUrl={faqIcon}
      variant={isActive && !disabledButtons ? 'yellow' : 'white'}
      position="right"
      backgroundClassName={s.backgroundTextIcon}
    >
      {texts.needHelp}
    </TextIcon>
  );

  const renderConnectionButton = ({ isActive }) => (
    <TextIcon
      imageUrl={headIcon}
      variant={isActive ? 'yellow' : 'white'}
      backgroundClassName={s.backgroundTextIcon}
    >
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
      <button className={s.suggestion}>{texts.customerService}</button>
    </div>
  );

  return (
    <div className={[s.menuItemsContainer, className].join(' ')}>
      <MenuButton
        buttonClassName={[
          s.menuItem,
          disabledButtons ? s.menuItemNotHovered : s.menuItemHovered,
        ].join(' ')}
        LabelComponent={renderHelpButton}
        SuggestionsComponent={renderSuggestions}
        disabled={disabledButtons}
      />
      <MenuButton
        buttonClassName={[
          s.menuItem,
          disabledButtons ? s.menuItemNotHovered : s.menuItemHovered,
        ].join(' ')}
        LabelComponent={renderConnectionButton}
        disabled={disabledButtons}
      />
    </div>
  );
};

DefaultRightComponent.propTypes = {
  texts: TextsType.isRequired,
  className: PropTypes.string.isRequired,
  disabledButtons: PropTypes.bool.isRequired,
};

const DefaultMiddleComponent = ({ texts, className, disabledButtons }) => {
  const renderBusinessButton = ({ isActive }) => (
    <TextIcon
      imageUrl={businessIcon}
      variant={isActive && !disabledButtons ? 'yellow' : 'melrose'}
      position="right"
      backgroundClassName={s.backgroundTextIcon}
    >
      {texts.business}
    </TextIcon>
  );

  renderBusinessButton.propTypes = {
    isActive: PropTypes.bool.isRequired,
  };

  // eslint-disable-next-line
  const onClick = () =>
    window.open('https://business.ectorparking.com', '_blank');

  return (
    <div className={[s.middleMenuItemsContainer, className].join(' ')}>
      <MenuButton
        buttonClassName={[
          s.menuItem,
          disabledButtons ? s.menuItemNotHovered : s.menuItemHovered,
        ].join(' ')}
        LabelComponent={renderBusinessButton}
        onClick={onClick}
        disabled={disabledButtons}
      />
    </div>
  );
};

DefaultMiddleComponent.propTypes = {
  texts: TextsType.isRequired,
  className: PropTypes.string.isRequired,
  disabledButtons: PropTypes.bool.isRequired,
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
  disabledButtons,
}) => (
  <div className={[s.wrapper, className].join(' ')}>
    <div className={[s.container, containerClassName].join(' ')}>
      <LogoComponent className={logoClassName} onClick={onClickLogo} />
      <MiddleComponent
        texts={texts}
        className={middleComponentClassName}
        disabledButtons={disabledButtons}
      />
      <RightComponent
        texts={texts}
        className={rightComponentClassName}
        disabledButtons={disabledButtons}
      />
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
  disabledButtons: false,
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
  disabledButtons: PropTypes.bool,
};

export default Header;
