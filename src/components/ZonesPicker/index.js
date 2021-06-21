import * as React from 'react';
import PropTypes from 'prop-types';
import Levenshtein from 'fast-levenshtein';
import { Picker, Input, Icon } from '..';
import { Type as ZoneType, ZoneTypesToIconName, ZoneTypes } from './ZoneType';
import ZonesPickerSuggestions from './ZonesPickerSuggestions';
import s from './ZonesPicker.module.css';
import Suggestions from './Zones.json';
import { DefaultTexts, TextsType } from './ZonePickerTexts';
import iconSearch from '../../assets/images/search.svg';
import iconClear from '../../assets/images/clear.svg';

const getZoneSuggestionsFromValue = (zoneSuggestions, value) =>
  zoneSuggestions
    .map(zone => {
      const zoneSuggestion = {
        ...zone,
        disabled: value.length > 0,
        similarity: 1,
      };
      if (zone.name.toLowerCase().includes(value.toLowerCase())) {
        zoneSuggestion.disabled = false;
        zoneSuggestion.similarity =
          Levenshtein.get(zone.name.toLowerCase(), value.toLowerCase(), {
            useCollator: true,
          }) / zone.name.length;
      }
      return zoneSuggestion;
    })
    .sort((zoneSuggestionA, zoneSuggestionB) => {
      if (
        zoneSuggestionA.name.indexOf(value) > -1 &&
        zoneSuggestionA.name.indexOf(value) <
          zoneSuggestionB.name.indexOf(value)
      ) {
        return -1;
      }

      if (
        zoneSuggestionB.name.indexOf(value) > -1 &&
        zoneSuggestionB.name.indexOf(value) <
          zoneSuggestionA.name.indexOf(value)
      ) {
        return 1;
      }

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
      split: propSplit,
    } = nextProps;
    let { fromZoneValue, toZoneValue, split } = prevState;

    if (!fromZoneValue && fromZoneProp && fromZoneSuggestions.length) {
      const fromZone = fromZoneSuggestions.find(
        suggestion => suggestion.name === fromZoneProp.name
      );
      fromZoneValue = fromZone ? fromZone.name : '';
    }

    if (!toZoneValue && toZoneProp && toZoneSuggestions.length) {
      const toZone = toZoneSuggestions.find(
        suggestion => suggestion.name === toZoneProp.name
      );
      toZoneValue = toZone ? toZone.name : '';
    }
    if (typeof propSplit !== 'undefined') {
      split = propSplit;
    }

    return {
      split,
      fromZoneValue,
      toZoneValue,
      fromZoneSuggestions: getZoneSuggestionsFromValue(
        fromZoneSuggestions,
        fromZoneValue
      ),
      toZoneSuggestions: getZoneSuggestionsFromValue(
        toZoneSuggestions,
        toZoneValue
      ),
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

  componentDidUpdate(prevProps) {
    const { fromZone: prevFromZone, toZone: prevToZone } = prevProps;
    const { fromZone, toZone } = this.props;

    if (prevFromZone !== fromZone) {
      this.setState({ fromZoneValue: fromZone ? fromZone.name : '' });
    }
    if (prevToZone !== toZone) {
      this.setState({ toZoneValue: toZone ? toZone.name : '' });
    }
  }

  handleFromZoneClick = zone => {
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

  handleToZoneClick = zone => {
    const { onSelect } = this.props;
    const { fromZoneValue, fromZoneSuggestions } = this.state;

    if (
      fromZoneValue &&
      fromZoneSuggestions.find(suggestion => suggestion.name === fromZoneValue)
    ) {
      this.picker.current.handleClickOutside({});
    }
    this.setState({ toZoneValue: zone.name });
    onSelect(zone, ZonesPicker.toZone);
  };

  handleFromZoneChange = event => {
    const {
      currentTarget: { value },
    } = event;
    const { onSelect } = this.props;

    if (!value) {
      onSelect(undefined, ZonesPicker.fromZone);
      this.setState(() => ({ fromZoneValue: '' }));
    } else {
      this.setState({ fromZoneValue: value });
    }
  };

  handleToZoneChange = event => {
    const {
      currentTarget: { value },
    } = event;
    const { onSelect } = this.props;

    if (!value) {
      this.setState(() => ({ toZoneValue: '' }));
      onSelect(undefined, ZonesPicker.toZone);
    } else {
      this.setState({ toZoneValue: value });
    }
  };

  handleFromZoneReset = () => {
    const { onSelect } = this.props;
    const { split, toZoneValue } = this.state;
    const newState = { toZoneValue, fromZoneValue: '' };

    if (!split) {
      newState.toZoneValue = '';
      onSelect(undefined, ZonesPicker.toZone);
    }
    this.setState(newState);
    onSelect(undefined, ZonesPicker.fromZone);
  };

  handleToZoneReset = () => {
    const { onSelect } = this.props;

    this.setState({ toZoneValue: '' });
    onSelect(undefined, ZonesPicker.toZone);
  };

  handleSplitSuggestions = () => {
    const { onSplitSuggestions } = this.props;

    this.setState(prevState => {
      const split = !prevState.split;

      onSplitSuggestions(split);
      return {
        split,
        toZoneValue: '',
      };
    });
  };

  renderFromInputLeftComponent = ({ className }) => {
    const { fromZone } = this.props;

    if (!fromZone || !fromZone.type) {
      return null;
    }
    return (
      <Icon
        IconComponent={props =>
          this.renderInputLeftIconComponent(props, fromZone.type)
        }
        name={ZoneTypesToIconName[fromZone.type]}
        className={[s.inputIcon, s.leftInputIcon, className].join(' ')}
      />
    );
  };

  renderFromInputRightComponent = ({ className }) => {
    const { fromZoneValue } = this.state;

    if (fromZoneValue.length === 0) {
      return (
        <Icon
          src={iconSearch}
          className={[s.inputIcon, s.rightInputIconContainer, className].join(
            ' '
          )}
          iconClassName={s.rightInputIcon}
        />
      );
    }
    return (
      <Icon
        src={iconClear}
        role="presentation"
        className={[s.inputAction, s.rightInputIconContainer, className].join(
          ' '
        )}
        iconClassName={s.rightInputIcon}
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

  renderInputLeftIconComponent = ({ name, className: iconClassName }, type) => {
    const { InputLeftIcon } = this.props;

    if (InputLeftIcon()) {
      return <InputLeftIcon type={type} />;
    }

    let className = [`icon icon-${name}`, iconClassName].join(' ');

    if (name === ZoneTypesToIconName[ZoneTypes.station]) {
      className = [className, s.stationIcon].join(' ');
    }

    return <i className={className} />;
  };

  renderToInputLeftComponent = ({ className }) => {
    const { toZone } = this.props;

    if (!toZone || !toZone.type) {
      return null;
    }
    return (
      <Icon
        IconComponent={props =>
          this.renderInputLeftIconComponent(props, toZone.type)
        }
        name={ZoneTypesToIconName[toZone.type]}
        className={[s.inputIcon, s.leftInputIcon, className].join(' ')}
      />
    );
  };

  renderToInputRightComponent = ({ className }) => {
    const { toZoneValue } = this.state;

    if (toZoneValue.length === 0) {
      return (
        <Icon
          src={iconSearch}
          className={[s.inputIcon, s.rightInputIconContainer, className].join(
            ' '
          )}
          iconClassName={s.rightInputIcon}
        />
      );
    }
    return (
      <Icon
        src={iconClear}
        role="presentation"
        className={[s.inputAction, s.rightInputIconContainer, className].join(
          ' '
        )}
        iconClassName={s.rightInputIcon}
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
        autoComplete="off"
        LeftComponent={this.renderToInputLeftComponent}
        RightComponent={this.renderToInputRightComponent}
      />
    );
  };

  renderSuggestionsComponent = pickerSuggestionsProps => {
    const { texts, ZoneSuggestionIcon, ArrowIcon } = this.props;
    const {
      split,
      fromZoneSuggestions,
      toZoneSuggestions,
      fromZoneValue,
      toZoneValue,
    } = this.state;

    return (
      <ZonesPickerSuggestions
        {...pickerSuggestionsProps}
        texts={texts}
        split={split}
        fromZoneSuggestions={fromZoneSuggestions}
        toZoneSuggestions={toZoneSuggestions}
        onSplit={this.handleSplitSuggestions}
        onFromZoneClick={this.handleFromZoneClick}
        onToZoneClick={this.handleToZoneClick}
        searchFrom={fromZoneValue}
        searchTo={toZoneValue}
        ZoneSuggestionIcon={ZoneSuggestionIcon}
        ArrowIcon={ArrowIcon}
      />
    );
  };

  render() {
    const { split, fromZoneValue, toZoneValue } = this.state;
    const { error, className, fromZone, toZone, texts } = this.props;

    return (
      <Picker
        ref={this.picker}
        split={split}
        FirstInputComponent={this.renderFromInputComponent}
        SecondInputComponent={this.renderToInputComponent}
        SuggestionsComponent={this.renderSuggestionsComponent}
        firstValue={fromZoneValue}
        secondValue={toZoneValue}
        fromZone={fromZone}
        toZone={toZone}
        error={error}
        className={className}
        texts={texts}
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
  onSplitSuggestions: () => null,
  ZoneSuggestionIcon: () => null,
  ArrowIcon: () => null,
  InputLeftIcon: () => null,
  split: undefined,
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
  onSplitSuggestions: PropTypes.func,
  split: PropTypes.bool,
  ZoneSuggestionIcon: PropTypes.func,
  ArrowIcon: PropTypes.func,
  InputLeftIcon: PropTypes.func,
};

ZonesPicker.fromZone = 'from';

ZonesPicker.toZone = 'to';

export default ZonesPicker;
