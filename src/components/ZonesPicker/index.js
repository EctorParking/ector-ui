import * as React from 'react';
import PropTypes from 'prop-types';
import Levenshtein from 'fast-levenshtein';
import {
  Picker,
  PickerSuggestions,
  Input,
  InputCheckbox,
  Icon,
} from '..';
import { Type as ZoneType, ZoneTypesToIconName, ZoneTypes } from './ZoneType';
import ZoneSuggestion from './ZoneSuggestion';
import s from './ZonesPicker.module.css';
import Suggestions from './ZonesPickerSuggestions.json';
import { DefaultTexts, TextsType } from './ZonePickerTexts';
import iconSearch from '../../assets/images/search.svg';
import iconClear from '../../assets/images/clear.svg';

const getZoneSuggestionsFromValue = (zoneSuggestions, value) => zoneSuggestions.map((zone) => {
  const zoneSuggestion = {
    ...zone,
    disabled: value.length > 0,
    similarity: 1,
  };
  if (zone.name.toLowerCase().includes(value.toLowerCase())) {
    zoneSuggestion.disabled = false;
    zoneSuggestion.similarity = Levenshtein.get(
      zone.name.toLowerCase(),
      value.toLowerCase(),
      { useCollator: true },
    ) / zone.name.length;
  }
  return zoneSuggestion;
}).sort((zoneSuggestionA, zoneSuggestionB) => {
  if (zoneSuggestionA.similarity === zoneSuggestionB.similarity) {
    return 0;
  }
  return zoneSuggestionA.similarity > zoneSuggestionB.similarity ? 1 : -1;
});

class ZonesPicker extends React.PureComponent {
  static getDerivedStateFromProps(nextProps, prevState) {
    const {
      fromZone: fromZoneProp,
      toZone: toZoneProp,
      fromZoneSuggestions,
      toZoneSuggestions,
    } = nextProps;
    if (!fromZoneProp && !toZoneProp) {
      return {
        ...prevState,
        fromZoneSuggestions:
          getZoneSuggestionsFromValue(fromZoneSuggestions, prevState.fromZoneValue),
        toZoneSuggestions: getZoneSuggestionsFromValue(toZoneSuggestions, prevState.toZoneValue),
      };
    }
    const fromZone = fromZoneProp
      ? fromZoneSuggestions.find(suggestion => suggestion.name === fromZoneProp.name)
      : undefined;
    const toZone = toZoneProp
      ? toZoneSuggestions.find(suggestion => suggestion.name === toZoneProp.name)
      : undefined;

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
    fromZoneType: undefined,
    toZoneValue: '',
    toZoneType: undefined,
    fromZoneSuggestions: [],
    toZoneSuggestions: [],
  };

  constructor() {
    super();

    this.picker = React.createRef();
  }

  handleFromZoneClick = (zone) => {
    const { onSelect } = this.props;
    const { split } = this.state;
    const newState = {};

    newState.fromZoneValue = zone.name;
    if (!split) {
      newState.toZoneValue = zone.name;
      this.picker.current.handleClickOutside({});
    }
    this.setState(newState);
    onSelect(zone, ZonesPicker.fromZone);
  };

  handleToZoneClick = (zone) => {
    const { onSelect } = this.props;
    const { fromZoneValue, fromZoneSuggestions } = this.state;

    if (
      fromZoneValue && fromZoneSuggestions.find(suggestion => suggestion.name === fromZoneValue)
    ) {
      this.picker.current.handleClickOutside({});
    }
    this.setState({ toZoneValue: zone.name });
    onSelect(zone, ZonesPicker.toZone);
  };

  handleFromZoneChange = (event) => {
    const { currentTarget: { value } } = event;

    this.setState({ fromZoneValue: value });
  };

  handleToZoneChange = (event) => {
    const { currentTarget: { value } } = event;

    this.setState({ toZoneValue: value });
  };

  handleFromZoneReset = () => {
    const { onSelect } = this.props;

    this.setState(prevState => ({ fromZoneValue: '', toZoneValue: prevState.split ? prevState.toZoneValue : '' }));
    onSelect({}, ZonesPicker.fromZone);
  };

  handleToZoneReset = () => {
    const { onSelect } = this.props;

    this.setState({ toZoneValue: '' });
    onSelect({}, ZonesPicker.toZone);
  };

  handleSplitSuggestions = () => {
    this.setState((prevState) => {
      const { onSelect } = this.props;
      const toZoneValue = prevState.split ? prevState.toZoneValue : '';

      onSelect(toZoneValue, ZonesPicker.toZone);
      return ({
        split: !prevState.split,
        toZoneValue,
      });
    });
  };

  renderFromInputLeftIconComponent = ({ name, className: iconClassName }) => {
    let className = [`icon icon-${name}`, iconClassName].join(' ');

    if (name === ZoneTypesToIconName[ZoneTypes.station]) {
      className = [className, s.stationIcon].join(' ');
    }

    return (
      <i className={className} />
    );
  };

  renderFromInputLeftComponent = ({ className }) => {
    const { fromZone } = this.props;

    if (!fromZone || !fromZone.type) {
      return null;
    }
    return (
      <Icon IconComponent={this.renderFromInputLeftIconComponent} name={ZoneTypesToIconName[fromZone.type]} variant="blue" className={[s.inputIcon, s.leftInputIcon, className].join(' ')} />
    );
  };

  renderFromInputRightComponent = ({ className }) => {
    const { fromZoneValue } = this.state;

    if (fromZoneValue.length === 0) {
      return (
        <Icon src={iconSearch} className={[s.inputIcon, s.rightInputIcon, className].join(' ')} />
      );
    }
    return (
      <Icon
        src={iconClear}
        role="presentation"
        className={[s.inputAction, s.rightInputIcon, className].join(' ')}
        onClick={this.handleFromZoneReset}
      />
    );
  };

  renderFromInputComponent = ({ className, ...inputProps }) => {
    const { texts } = this.props;

    return (
      <Input
        {...inputProps}
        onChange={this.handleFromZoneChange}
        placeholder={texts.inputPlaceholder}
        className={[s.input, className].join(' ')}
        autoComplete="off"
        LeftComponent={this.renderFromInputLeftComponent}
        RightComponent={this.renderFromInputRightComponent}
      />
    );
  };

  renderToInputLeftIconComponent = ({ name, className: iconClassName }) => {
    let className = [`icon icon-${name}`, iconClassName].join(' ');

    if (name === ZoneTypesToIconName[ZoneTypes.station]) {
      className = [className, s.stationIcon].join(' ');
    }

    return (
      <i className={className} />
    );
  };

  renderToInputLeftComponent = ({ className }) => {
    const { toZone } = this.props;

    if (!toZone || !toZone.type) {
      return null;
    }
    return (
      <Icon IconComponent={this.renderToInputLeftIconComponent} name={ZoneTypesToIconName[toZone.type]} variant="blue" className={[s.inputIcon, s.leftInputIcon, className].join(' ')} />
    );
  };

  renderToInputRightComponent = ({ className }) => {
    const { toZoneValue } = this.state;

    if (toZoneValue.length === 0) {
      return (
        <Icon src={iconSearch} className={[s.inputIcon, s.rightInputIcon, className].join(' ')} />
      );
    }
    return (
      <Icon
        src={iconClear}
        role="presentation"
        className={[s.inputAction, s.rightInputIcon, className].join(' ')}
        onClick={this.handleToZoneReset}
      />
    );
  };

  renderToInputComponent = ({ className, ...inputProps }) => {
    const { texts } = this.props;

    return (
      <Input
        {...inputProps}
        onChange={this.handleToZoneChange}
        placeholder={texts.inputPlaceholder}
        className={[s.input, className].join(' ')}
        autocomplete="off"
        LeftComponent={this.renderToInputLeftComponent}
        RightComponent={this.renderToInputRightComponent}
      />
    );
  };

  renderFromZoneSuggestion = (zone) => {
    const { split } = this.state;

    return (
      <ZoneSuggestion
        value={zone}
        key={zone.code}
        split={split}
        onClick={() => this.handleFromZoneClick(zone)}
        disabled={zone.disabled}
      />
    );
  };

  renderToZoneSuggestion = zone => (
    <ZoneSuggestion
      value={zone}
      key={zone.code}
      split
      onClick={() => this.handleToZoneClick(zone)}
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
            {fromZoneSuggestions.map(this.renderFromZoneSuggestion)}
          </div>
          <div className={[s.suggestions, s.splitSuggestions, visible && split ? s.visible : undefined].join(' ')}>
            {toZoneSuggestions.map(this.renderToZoneSuggestion)}
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
    const { error, className } = this.props;

    return (
      <Picker
        ref={this.picker}
        split={split}
        FirstInputComponent={this.renderFromInputComponent}
        SecondInputComponent={this.renderToInputComponent}
        SuggestionsComponent={this.renderSuggestionsComponent}
        firstValue={fromZoneValue}
        secondValue={toZoneValue}
        error={error}
        className={className}
      />
    );
  }
}

ZonesPicker.defaultProps = {
  onSelect: () => null,
  fromZone: undefined,
  toZone: undefined,
  fromZoneSuggestions: Suggestions,
  toZoneSuggestions: Suggestions,
  texts: DefaultTexts,
  className: undefined,
  error: '',
};

ZonesPicker.propTypes = {
  fromZoneSuggestions: PropTypes.arrayOf(ZoneType),
  toZoneSuggestions: PropTypes.arrayOf(ZoneType),
  onSelect: PropTypes.func,
  fromZone: ZoneType,
  toZone: ZoneType,
  texts: TextsType,
  className: PropTypes.string,
  error: PropTypes.string,
};

ZonesPicker.fromZone = 'from';

ZonesPicker.toZone = 'to';

export default ZonesPicker;
