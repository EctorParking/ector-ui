import * as React from 'react';
import PropTypes from 'prop-types';
import levenshtein from 'fast-levenshtein';
import {
  Picker,
  PickerSuggestions,
  Input,
  InputCheckbox,
} from '..';
import ZoneSuggestion from './ZoneSuggestion';
import s from './ZonesPicker.css';
import Suggestions from './ZonesPickerSuggestions';

const getZoneSuggestionsFromValue = (zoneSuggestions, value) => zoneSuggestions.map((zone) => {
  const ret = {
    ...zone,
    disabled: value.length > 0,
    similarity: 1,
  };
  if (zone.name.toLowerCase().includes(value.toLowerCase())) {
    ret.disabled = false;
    ret.similarity = levenshtein.get(zone.name, value, { useCollator: true })/
      zone.name.length;
  }
  return ret;
}).sort((zoneSuggestionA, zoneSuggestionB) => {
  if(zoneSuggestionA.similarity === zoneSuggestionB.similarity) {
    return 0
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
    console.log('get dervied state', nextProps, prevState);

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
    console.log('new state::', toZone, fromZone);
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

    if (suggestionColumnPosition === 'first') {
      newState.fromZoneValue = zone.name;
      if (!split) {
        newState.toZoneValue = zone.name;
        shouldClosePicker = true;
      }
    } else if (suggestionColumnPosition === 'second') {
      shouldClosePicker = (
        fromZoneValue
        && fromZoneSuggestions.findIndex(suggestion => suggestion.name === fromZoneValue) >= 0
      );
      newState.toZoneValue = zone.name;
    }
    if (shouldClosePicker) {
      this.picker.current.handleClickOutside({});
    }
    this.setState(() => newState);
    onSelect(zone, suggestionColumnPosition);
  };

  handleZoneChange = (event, inputPosition) => {
    const { currentTarget: { value } } = event;

    if (inputPosition === 'first') {
      this.setState(() => ({ fromZoneValue: value }));
    } else {
      this.setState(() => ({ toZoneValue: value }));
    }
  };

  handleZoneReset = (inputPosition) => {
    const { onSelect } = this.props;
    if (inputPosition === 'first') {
      this.setState(prevState => ({ fromZoneValue: '', toZoneValue: prevState.split ? prevState.toZoneValue : '' }));
    } else {
      this.setState(() => ({ toZoneValue: '' }));
    }
    onSelect({}, inputPosition);
  };

  handleSplitSuggestions = () => {
    this.setState((prevState) => {
      const { onSelect } = this.props;
      const toZoneValue = prevState.split ? prevState.toZoneValue : '';

      onSelect(toZoneValue, 'second');
      return ({
        split: !prevState.split,
        toZoneValue,
      });
    });
  };

  renderInputComponent = ({ className, position: inputPosition, ...inputProps }) => (
    <div className={s.inputContainer}>
      <Input {...inputProps} onChange={e => this.handleZoneChange(e, inputPosition)} placeholder="Aéroport ou gare..." className={[s.input, className].join(' ')} autocomplete="off" />
      <span role="presentation" className={[s.inputAction, inputProps.value.length === 0 ? s.hidden : undefined].join(' ')} onClick={() => this.handleZoneReset(inputPosition)}>
          &times;
      </span>
    </div>
  );

  renderZoneSuggestion = (zone) => {
    const { split } = this.state;

    return (
      <ZoneSuggestion
        name={zone.name}
        key={zone.code}
        split={split}
        onClick={() => this.handleZoneClick(zone, 'first')}
        disabled={zone.disabled}
      />
    );
  };

  renderSplitZoneSuggestion = (zone) => {
    const { split } = this.state;

    return (
      <ZoneSuggestion
        name={zone.name}
        key={zone.code}
        split={split}
        onClick={() => this.handleZoneClick(zone, 'second')}
        disabled={zone.disabled}
      />
    );
  };

  renderSuggestionsComponent = ({ visible, ...rest }) => {
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
              Lieu de retour différent
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
};

export default ZonePicker;
