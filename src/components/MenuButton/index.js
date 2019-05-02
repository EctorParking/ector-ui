import React from 'react';
import PropTypes from 'prop-types';
import { PickerSuggestions } from '..';

import s from './MenuButton.module.css';

class MenuButton extends React.PureComponent {
  constructor(props) {
    super(props);

    this.containerRef = React.createRef();
    this.state = {
      visible: false,
      isMouseHover: false,
    };
  }

  componentDidMount() {
    // eslint-disable-next-line no-undef
    document.addEventListener('mousedown', this.handleClickOutside);
  }

  componentWillUnmount() {
    // eslint-disable-next-line no-undef
    document.removeEventListener('mousedown', this.handleClickOutside);
  }

  handleClickOutside = (e) => {
    if (this.containerRef.current && !this.containerRef.current.contains(e.target)) {
      this.setState({ visible: false });
    }
  };

  handleClick = () => {
    const { onClick } = this.props;

    this.setState({ visible: true });

    onClick();
  };

  onHover = () => {
    this.setState({ isMouseHover: true });
  };

  onLeave = () => {
    this.setState({ isMouseHover: false });
  };

  render() {
    const {
      LabelComponent,
      SuggestionsComponent,
      className,
      buttonClassName,
      suggestionsClassName,
      disabled,
    } = this.props;
    const { visible, isMouseHover } = this.state;

    return (
      <div
        className={[s.container, className].join((' '))}
        ref={this.containerRef}
      >
        <button
          className={[s.button, buttonClassName].join(' ')}
          onClick={this.handleClick}
          onMouseEnter={this.onHover}
          onMouseLeave={this.onLeave}
          disabled={disabled}
        >
          <LabelComponent isActive={(!!SuggestionsComponent && visible) || isMouseHover} />
        </button>
        {SuggestionsComponent && (
          <PickerSuggestions visible={visible} className={[s.suggestions, suggestionsClassName].join(' ')}>
            <SuggestionsComponent />
          </PickerSuggestions>
        )}
      </div>
    );
  }
}

MenuButton.defaultProps = {
  className: undefined,
  buttonClassName: undefined,
  suggestionsClassName: undefined,
  SuggestionsComponent: null,
  onClick: () => null,
  disabled: false,
};

MenuButton.propTypes = {
  LabelComponent: PropTypes.func.isRequired,
  SuggestionsComponent: PropTypes.func,
  onClick: PropTypes.func,
  className: PropTypes.string,
  buttonClassName: PropTypes.string,
  suggestionsClassName: PropTypes.string,
  disabled: PropTypes.bool,
};

export default MenuButton;
