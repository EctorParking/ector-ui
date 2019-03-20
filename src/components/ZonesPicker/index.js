import * as React from 'react';
import PropTypes from 'prop-types';
import Levenshtein from 'fast-levenshtein';
import {
  Picker,
  PickerSuggestions,
  Input,
  InputCheckbox,
} from '..';
import ZoneSuggestion from './ZoneSuggestion';
import s from './ZonesPicker.css';
import Suggestions from './ZonesPickerSuggestions';
import { DefaultTexts, TextsType } from './ZonePickerTexts';

const getZoneSuggestionsFromValue = (zoneSuggestions, value) => zoneSuggestions.map((zone) => {
  const zoneSuggestion = {
    ...zone,
    disabled: value.length > 0,
    similarity: 1,
  };
  if (zone.name.toLowerCase().includes(value.toLowerCase())) {
    zoneSuggestion.disabled = false;
    zoneSuggestion.similarity = Levenshtein.get(zone.name, value, { useCollator: true });
  }
  return zoneSuggestion;
}).sort((zoneSuggestionA, zoneSuggestionB) => {
  if (zoneSuggestionA.similarity === zoneSuggestionB.similarity) {
    return 0;
  }
  return zoneSuggestionA.similarity > zoneSuggestionB.similarity ? 1 : -1;
});

class ZonePicker extends React.PureComponent {
  static getDerivedStateFromProps(nextProps, prevState) {
    const {
      fromZone: fromZoneProp,
      toZone: toZoneProp,
      fromZoneSuggestions,
      toZoneSuggestions,
    } = nextProps;
    if (!fromZoneProp.length && !toZoneProp.length) {
      return {
        ...prevState,
        fromZoneSuggestions:
          getZoneSuggestionsFromValue(fromZoneSuggestions, prevState.fromZoneValue),
        toZoneSuggestions: getZoneSuggestionsFromValue(toZoneSuggestions, prevState.toZoneValue),
      };
    }
    const fromZone = fromZoneSuggestions.find(suggestion => suggestion.name === fromZoneProp);
    const toZone = toZoneSuggestions.find(suggestion => suggestion.name === toZoneProp);

    const newState = {
      fromZoneValue: fromZone && fromZone.length >= prevState.fromZoneValue.length
        ? fromZone
        : prevState.fromZoneValue,
      toZoneValue: toZone && toZone.length >= prevState.toZoneValue.length
        ? toZone
        : prevState.toZoneValue,
    };

    return {
      ...newState,
      fromZoneSuggestions: getZoneSuggestionsFromValue(fromZoneSuggestions, newState.fromZoneValue),
      toZoneSuggestions: getZoneSuggestionsFromValue(toZoneSuggestions, newState.toZoneValue),
    };
  }

  state = {
    split: false,
    fromZoneValue: '',
    toZoneValue: '',
    fromZoneSuggestions: [],
    toZoneSuggestions: [],
  };

  constructor() {
    super();

    this.picker = React.createRef();
  }

  handleZoneClick = (zone, suggestionColumnPosition) => {
    const { onSelect } = this.props;
    const { split, fromZoneValue, fromZoneSuggestions } = this.state;
    const newState = {};
    let shouldClosePicker = false;

    if (suggestionColumnPosition === Picker.firstInput) {
      newState.fromZoneValue = zone.name;
      if (!split) {
        newState.toZoneValue = zone.name;
        shouldClosePicker = true;
      }
    } else if (suggestionColumnPosition === Picker.secondInput) {
      shouldClosePicker = (
        fromZoneValue
        && fromZoneSuggestions.findIndex(suggestion => suggestion.name === fromZoneValue) >= 0
      );
      newState.toZoneValue = zone.name;
    }
    if (shouldClosePicker) {
      this.picker.current.handleClickOutside({});
    }
    this.setState(newState);
    onSelect(zone, suggestionColumnPosition);
  };

  handleZoneChange = (event, inputPosition) => {
    const { currentTarget: { value } } = event;

    if (inputPosition === Picker.firstInput) {
      this.setState({ fromZoneValue: value });
    } else {
      this.setState({ toZoneValue: value });
    }
  };

  handleZoneReset = (inputPosition) => {
    const { onSelect } = this.props;

    if (inputPosition === Picker.firstInput) {
      this.setState(prevState => ({ fromZoneValue: '', toZoneValue: prevState.split ? prevState.toZoneValue : '' }));
    } else {
      this.setState({ toZoneValue: '' });
    }
    onSelect({}, inputPosition);
  };

  handleSplitSuggestions = () => {
    this.setState((prevState) => {
      const { onSelect } = this.props;
      const toZoneValue = prevState.split ? prevState.toZoneValue : '';

      onSelect(toZoneValue, Picker.secondInput);
      return ({
        split: !prevState.split,
        toZoneValue,
      });
    });
  };

  renderInputComponent = ({ className, position: inputPosition, ...inputProps }) => {
    const { texts } = this.props;

    return (
      <div className={s.inputContainer}>
        <Input
          {...inputProps}
          onChange={e => this.handleZoneChange(e, inputPosition)}
          placeholder={texts.inputPlaceholder}
          className={[s.input, className].join(' ')}
          autocomplete="off"
        />
        <span role="presentation" className={[s.inputAction, inputProps.value.length === 0 ? s.hidden : undefined].join(' ')} onClick={() => this.handleZoneReset(inputPosition)}>
          &times;
        </span>
      </div>
    );
  };

  renderZoneSuggestion = (zone) => {
    const { split } = this.state;

    return (
      <ZoneSuggestion
        name={zone.name}
        key={zone.code}
        split={split}
        onClick={() => this.handleZoneClick(zone, Picker.firstInput)}
        disabled={zone.disabled}
      />
    );
  };

  renderSplitZoneSuggestion = zone => (
    <ZoneSuggestion
      name={zone.name}
      key={zone.code}
      split
      onClick={() => this.handleZoneClick(zone, Picker.secondInput)}
      disabled={zone.disabled}
    />
  );

  renderSuggestionsComponent = ({ visible, ...rest }) => {
    const { texts } = this.props;
    const { split, fromZoneSuggestions, toZoneSuggestions } = this.state;

    return (
      <PickerSuggestions visible={visible} {...rest}>
        <div className={s.suggestionsContainer}>
          <div className={[s.suggestions, visible ? s.visible : undefined].join(' ')}>
            {fromZoneSuggestions.map(this.renderZoneSuggestion)}
          </div>
          <div className={[s.suggestions, s.splittedSuggestions, visible && split ? s.visible : undefined].join(' ')}>
            {toZoneSuggestions.map(this.renderSplitZoneSuggestion)}
          </div>
        </div>
        <div className={[s.suggestionAction, visible ? s.suggestionActionVisible : undefined].join(' ')}>
          <InputCheckbox onChange={this.handleSplitSuggestions} checked={split}>
            {texts.suggestionCheckboxLabel}
          </InputCheckbox>
        </div>
      </PickerSuggestions>
    );
  };

  render() {
    const { split, fromZoneValue, toZoneValue } = this.state;

    return (
      <Picker
        ref={this.picker}
        split={split}
        InputComponent={this.renderInputComponent}
        SuggestionsComponent={this.renderSuggestionsComponent}
        firstValue={fromZoneValue}
        secondValue={toZoneValue}
      />
    );
  }
}

ZonePicker.defaultProps = {
  onSelect: () => null,
  fromZone: '',
  toZone: '',
  fromZoneSuggestions: Suggestions,
  toZoneSuggestions: Suggestions,
  texts: DefaultTexts,
};

const ZoneType = PropTypes.shape({
  name: PropTypes.string,
  code: PropTypes.string,
});

ZonePicker.propTypes = {
  fromZoneSuggestions: PropTypes.arrayOf(ZoneType),
  toZoneSuggestions: PropTypes.arrayOf(ZoneType),
  onSelect: PropTypes.func,
  fromZone: PropTypes.string,
  toZone: PropTypes.string,
  texts: TextsType,
};

export default ZonePicker;
