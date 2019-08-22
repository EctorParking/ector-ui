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
      info,
      error,
    };
  }

  componentDidMount() {
    // eslint-disable-next-line no-undef
    document.addEventListener('mousedown', this.handleClickOutside);
  }

  componentWillReceiveProps(newProps) {
    const { info, error } = this.state;
    const { info: newInfo, error: newError } = newProps;

    if (info !== newInfo) {
      const setNewInfo = () => this.setState({ info: newInfo });

      if (info === '') {
        setNewInfo();
      } else {
        this.setState({ info: '' }, () => {
          setTimeout(setNewInfo, 200);
        });
      }
    }

    if (error !== newError) {
      const setNewError = () => this.setState({ error: newError });

      if (error === '') {
        setNewError();
      } else {
        this.setState({ error: '' }, () => {
          setTimeout(setNewError, 200);
        });
      }
    }
  }

  componentWillUnmount() {
    // eslint-disable-next-line no-undef
    document.removeEventListener('mousedown', this.handleClickOutside);
  }

  handleClickOutside = (e) => {
    if (this.containerRef.current && !this.containerRef.current.contains(e.target)) {
      this.setState({ suggestionsVisible: false });

      const { onSuggestionsHide } = this.props;

      onSuggestionsHide();
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
    } = this.props;
    const {
      info,
      error,
      suggestionsVisible,
    } = this.state;
    const hasError = error && error !== '';
    const hasInfo = info && info !== '';

    return (
      <div className={[s.container, suggestionsVisible ? s.active : undefined, className].join(' ')} ref={this.containerRef}>
        <div className={[s.error, hasError ? s.errorVisible : undefined].join(' ')}>
          {error}
        </div>
        <div className={[s.info, hasInfo && !hasError ? s.infoVisible : undefined].join(' ')}>
          {info}
        </div>
        <div className={s.shadowWrapper}>
          <FirstInputComponent
            value={firstValue}
            className={[s.pickerInput, hasError ? s.inputError : undefined].join(' ')}
            containerClassName={s.pickerInputContainer}
            onFocus={this.handleFocus}
          />
          {
            split && (
              <SecondInputComponent
                value={secondValue}
                className={[s.pickerInput, hasError ? s.inputError : undefined].join(' ')}
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
