import React from 'react';
import PropTypes from 'prop-types';
import s from './Picker.module.css';
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
      split,
      SuggestionsComponent,
      FirstInputComponent,
      SecondInputComponent,
      firstValue,
      secondValue,
      className,
      error,
    } = this.props;
    const { suggestionsVisible } = this.state;

    return (
      <div className={[s.container, className].join(' ')} ref={this.containerRef}>
        <div className={[s.error, error !== '' ? s.errorVisible : undefined].join(' ')}>
          {error}
        </div>
        <div className={s.shadowWrapper}>
          <FirstInputComponent
            value={firstValue}
            className={s.pickerInput}
            containerClassName={s.pickerInputContainer}
            onFocus={this.handleFocus}
          />
          {
            split && (
              <SecondInputComponent
                value={secondValue}
                className={s.pickerInput}
                containerClassName={[s.pickerInputContainer, s.splitPickerInputContainer].join(' ')}
                onFocus={this.handleFocus}
              />
            )
          }
        </div>
        <SuggestionsComponent visible={suggestionsVisible} split={split} />
      </div>
    );
  }
}

Picker.defaultProps = {
  split: false,
  SuggestionsComponent: props => <PickerSuggestions {...props} />,
  FirstInputComponent: props => <Input {...props} />,
  SecondInputComponent: props => <Input {...props} />,
  firstValue: '',
  secondValue: '',
  className: undefined,
  error: '',
};

Picker.propTypes = {
  split: PropTypes.bool,
  SuggestionsComponent: PropTypes.func,
  FirstInputComponent: PropTypes.func,
  SecondInputComponent: PropTypes.func,
  firstValue: PropTypes.string,
  secondValue: PropTypes.string,
  className: PropTypes.string,
  error: PropTypes.string,
};

export default Picker;
