import React from 'react';
import PropTypes from 'prop-types';
import { PickerSuggestions } from '..';

import s from './MenuButton.module.css';

class MenuButton extends React.Component {
  constructor(props) {
    super(props);

    this.button = React.createRef();
    this.state = {
      visible: false,
      isMouseHover: false,
    };
  }

  componentWillMount() {
    document.addEventListener('mousedown', this.handleClick, false);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClick, false);
  }

  handleClick = (e) => {
    const { onClick } = this.props;

    if (this.button.current.contains(e.target)) {
      this.setState({ visible: true });

      return onClick();
    }

    return this.setState({ visible: false });
  };

  onHover = () => {
    this.setState({ isMouseHover: true });
  };

  onLeave = () => {
    this.setState({ isMouseHover: false });
  };

  render() {
    const {
      LabelComponent, SuggestionsComponent, className, buttonClassName, suggestionsClassName,
    } = this.props;
    const { visible, isMouseHover } = this.state;

    return (
      <div className={[s.container, className].join((' '))}>
        <button
          className={[s.button, buttonClassName].join(' ')}
          ref={this.button}
          onMouseEnter={this.onHover}
          onMouseLeave={this.onLeave}
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
};

MenuButton.propTypes = {
  LabelComponent: PropTypes.func.isRequired,
  SuggestionsComponent: PropTypes.func,
  onClick: PropTypes.func,
  className: PropTypes.string,
  buttonClassName: PropTypes.string,
  suggestionsClassName: PropTypes.string,
};

export default MenuButton;
