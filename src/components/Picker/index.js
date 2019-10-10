import React from 'react';
import PropTypes from 'prop-types';
import s from './Picker.module.css';
import { Input, PickerSuggestions } from '..';

class Picker extends React.PureComponent {
  constructor(props) {
    super(props);

    this.containerRef = React.createRef();

    const { info, error } = this.props;

    this.state = {
      suggestionsVisible: false,
      infoVisible: !!info,
      errorVisible: !!error,
    };
  }

  componentDidMount() {
    // eslint-disable-next-line no-undef
    document.addEventListener('mousedown', this.handleClickOutside);
  }

  componentWillReceiveProps(newProps) {
    const { info: oldInfo, error: oldError } = this.props;
    const { info: newInfo, error: newError } = newProps;

    if (newError !== oldError) {
      this.setState({ errorVisible: !!newError });
    } else if (newInfo) {
      this.setState({ infoVisible: !!newInfo });
    }
  }

  componentWillUnmount() {
    // eslint-disable-next-line no-undef
    document.removeEventListener('mousedown', this.handleClickOutside);
  }

  handleClickOutside = (e) => {
    if (this.containerRef.current && !this.containerRef.current.contains(e.target)) {
      this.hideSuggestions();

      const { onSuggestionsHide } = this.props;

      onSuggestionsHide();
    }
  };

  handleFocus = () => {
    this.setState({ suggestionsVisible: true });
  };

  hideSuggestions() {
    this.setState({ infoVisible: false, suggestionsVisible: false });
  }

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
      info,
    } = this.props;
    const {
      infoVisible,
      errorVisible,
      suggestionsVisible,
    } = this.state;
    const hasInfo = info && info !== '';
    const hasError = error && error !== '';

    return (
      <div className={[s.container, suggestionsVisible ? s.active : undefined, className].join(' ')} ref={this.containerRef}>
        <div className={[s.error, hasError && errorVisible ? s.errorVisible : undefined].join(' ')}>
          {error}
        </div>
        <div className={[s.info, hasInfo && !hasError && infoVisible ? s.infoVisible : undefined].join(' ')}>
          {info}
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
  error: undefined,
  info: undefined,
  onSuggestionsHide: () => null,
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
  info: PropTypes.string,
  onSuggestionsHide: PropTypes.func,
};

export default Picker;
