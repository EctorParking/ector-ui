import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Icon, MenuButton } from '..';

import s from './Header.module.css';

const DefaultRightComponent = () => {
  const renderHelpButton = ({ isActive }) => (
    <Fragment>
      <Icon
        src="https://cdn.ectorparking.com/images/5ca2919a41b0f.svg"
        className={s.menuItemLinkIcon}
        variant={isActive ? 'yellow' : 'white'}
        position="right"
      />
      <span className={s.menuItemText}>Besoin d'aide ?</span>
    </Fragment>
  );

  const renderConnectionButton = ({ isActive }) => (
    <Fragment>
      <Icon
        src="https://cdn.ectorparking.com/images/5ca291a60c49b.svg"
        className={s.menuItemLinkIcon}
        variant={isActive ? 'yellow' : 'white'}
        position="right"
      />
      <span className={s.menuItemText}>Connexion</span>
    </Fragment>
  );

  const renderSuggestions = () => (
    <div className={s.helpSuggestions}>
      <button onClick={() => console.log('questions fréquentes')} className={s.suggestion}>Questions fréquentes</button>
      <button onClick={() => console.log('Service Client')} className={s.suggestion}>Service client</button>
    </div>
  );

  return (
    <div className={s.menuItemsContainer}>
      <MenuButton LabelComponent={renderHelpButton} SuggestionsComponent={renderSuggestions} />
      <MenuButton LabelComponent={renderConnectionButton} />
    </div>
  );
};

DefaultRightComponent.defaultProps = {};

DefaultRightComponent.propTypes = {};

const Header = ({
  className,
  containerClassName,
  LogoComponent, MiddleComponent, RightComponent,
}) => (
  <div className={[s.wrapper, className].join(' ')}>
    <div className={[s.container, containerClassName].join(' ')}>
      <LogoComponent />
      <MiddleComponent />
      <RightComponent />
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
  MiddleComponent: () => null,
  RightComponent: DefaultRightComponent,
};

Header.propTypes = {
  LogoComponent: PropTypes.func,
  MiddleComponent: PropTypes.func,
  RightComponent: PropTypes.func,
  className: PropTypes.string,
  containerClassName: PropTypes.string,
};

export default Header;
