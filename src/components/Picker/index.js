import React from 'react';
import PropTypes from 'prop-types';
import s from './Picker.css';
import { Input, PickerSuggestions } from '..';

class Picker extends React.PureComponent {
  constructor() {
    super();

    this.containerRef = React.createRef();
  }

  state = {
    suggestionsVisible: false,
  };

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
      this.setState({ suggestionsVisible: false });
    }
  };

  handleFocus = () => {
    this.setState({ suggestionsVisible: true });
  };

  render() {
    const {
      split, SuggestionsComponent, InputComponent, firstValue, secondValue,
    } = this.props;
    const { suggestionsVisible } = this.state;

    return (
      <div className={[s.container, split ? s.splittedContainer : undefined].join(' ')} ref={this.containerRef}>
        <InputComponent
          value={firstValue}
          position="first"
          className={s.pickerInput}
          onFocus={this.handleFocus}
        />
        {
          split && (
            <InputComponent
              value={secondValue}
              position="second"
              className={[s.pickerInput, s.splittedPickerInput].join(' ')}
              onFocus={this.handleFocus}
            />
          )
        }
        <SuggestionsComponent visible={suggestionsVisible} />
      </div>
    );
  }
}

const DefaultInputComponent = ({ position, ...props }) => <Input {...props} />;

DefaultInputComponent.propTypes = {
  position: PropTypes.oneOf(['first', 'second']).isRequired,
};

Picker.defaultProps = {
  split: false,
  SuggestionsComponent: props => <PickerSuggestions {...props} />,
  InputComponent: DefaultInputComponent,
  firstValue: '',
  secondValue: '',
};

Picker.propTypes = {
  split: PropTypes.bool,
  SuggestionsComponent: PropTypes.func,
  InputComponent: PropTypes.func,
  firstValue: PropTypes.string,
  secondValue: PropTypes.string,
};

export default Picker;
