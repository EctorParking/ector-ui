import React from 'react';
import PropTypes from 'prop-types';
import { Icon, PickerSuggestions } from '..';

import s from './Header.module.css';

class DefaultRightComponent extends React.Component {
  constructor(props) {
    super(props);

    this.helpButton = React.createRef();
    this.state = {
      visible: false,
      isMouseHoverHelpButton: false,
      isMouseHoverConnexionButton: false,
    };

    this.onHoverConnexion = this.onHover.bind(this, 'isMouseHoverConnexionButton');
    this.onHoverHelp = this.onHover.bind(this, 'isMouseHoverHelpButton');
    this.onLeaveConnexion = this.onLeave.bind(this, 'isMouseHoverConnexionButton');
    this.onLeaveHelp = this.onLeave.bind(this, 'isMouseHoverHelpButton');
  }

  componentWillMount() {
    document.addEventListener('mousedown', this.handleClick, false);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClick, false);
  }

  handleClick = (e) => {
    if (this.helpButton.current.contains(e.target)) {
      return this.setState({ visible: true });
    }

    return this.setState({ visible: false });
  };

  onHover = (field) => {
    this.setState({ [field]: true });
  };

  onLeave = (field) => {
    this.setState({ [field]: false });
  };

  render() {
    const { visible, isMouseHoverHelpButton, isMouseHoverConnexionButton } = this.state;

    return (
      <div className={s.menuItemsContainer}>
        <button
          className={[s.menuItemContainer, visible ? s.visible : undefined].join(' ')}
          ref={this.helpButton}
          onMouseEnter={this.onHoverHelp}
          onMouseLeave={this.onLeaveHelp}
        >
          <Icon
            src="https://cdn.ectorparking.com/images/5ca2919a41b0f.svg"
            className={s.menuItemLinkIcon}
            variant={visible || isMouseHoverHelpButton ? 'yellow' : 'white'}
            position="right"
          />
          <span className={s.menuItemText}>Besoin d'aide ?</span>
        </button>
        <PickerSuggestions visible={visible} className={s.suggestions}>
          <div className={s.helpSuggestions}>
            <button onClick={() => console.log('questions fréquentes')} className={s.suggestion}>Questions fréquentes</button>
            <button onClick={() => console.log('Service Client')} className={s.suggestion}>Service client</button>
          </div>
        </PickerSuggestions>
        <button
          className={s.menuItemContainer}
          onMouseEnter={this.onHoverConnexion}
          onMouseLeave={this.onLeaveConnexion}
        >
          <Icon
            src="https://cdn.ectorparking.com/images/5ca291a60c49b.svg"
            className={s.menuItemLinkIcon}
            variant={isMouseHoverConnexionButton ? 'yellow' : 'white'}
            position="right"
          />
          <span className={s.menuItemText}>Connexion</span>
        </button>
      </div>
    );
  }
}

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
