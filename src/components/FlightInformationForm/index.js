import React from 'react';
import PropTypes from 'prop-types';
import {
  Card,
  InputLabel,
  InputSelect,
  ActionLink,
} from '..';
import s from './FlightInformationForm.module.css';
import { SpotType } from './SpotType';
import { TextsType, DefaultTexts } from './FlightInformationFormTexts';

class FlightInformationForm extends React.Component {
  constructor(props) {
    super(props);

    this.renderFromZoneTerminal = this.renderTerminalSelect.bind(this, 'from');
    this.renderToZoneTerminal = this.renderTerminalSelect.bind(this, 'to');
    this.onChangeTravelingNumberTo = this.onChange.bind(this, 'travelingNumberTo');
    this.onChangeReturnFlightOrigin = this.onChange.bind(this, 'returnFlightOrigin');
    this.onChangeReturnFlightCompany = this.onChangeSelect.bind(this, 'returnFlightCompany');
    this.onChangeFromSpot = this.onChangeSelect.bind(this, 'fromSpot');
    this.onChangeToSpot = this.onChangeSelect.bind(this, 'toSpot');

    this.state = {
      shouldDisplayReturnFlightInformation: false,
    };
  }

  componentDidUpdate(prevProps) {
    const { shouldDisplayReturnFlightInformation: should } = this.props;
    const {
      shouldDisplayReturnFlightInformation: oldShould,
    } = prevProps;

    if (oldShould !== should
      && should
    ) {
      this.setState({ shouldDisplayReturnFlightInformation: should });
    }
  }

  onChange = (field, event) => {
    const { onChange } = this.props;

    onChange(field, event.currentTarget.value);
  };

  onChangeSelect = (field, option, { action }) => {
    const { onChange, onClear } = this.props;

    if (action === 'clear') {
      onClear(field);
    } else {
      onChange(field, option.value);
    }
  };

  renderTerminalSelect = (fromOrTo) => {
    const {
      [`${fromOrTo}SpotsAvailable`]: spots,
      [`${fromOrTo}Spot`]: selectedSpot,
      texts,
    } = this.props;

    return (
      <InputSelect
        options={spots.map(spot => ({ value: spot, label: `${spot.type === 'airport' ? texts.spotAirport : texts.spotTrain} ${spot.shortName}` }))}
        value={selectedSpot ? { value: selectedSpot, label: `${selectedSpot.type === 'airport' ? texts.spotAirport : texts.spotTrain} ${selectedSpot.shortName}` } : null}
        placeholder={texts.placeholderSpot}
        onChange={fromOrTo === 'from' ? this.onChangeFromSpot : this.onChangeToSpot}
        isSearchable={false}
        isClearable
      />
    );
  };

  renderAirlinesSelect = () => {
    const {
      airlines,
      returnFlightCompany,
      texts,
    } = this.props;
    const selectedAirline = airlines.find(airline => airline.name === returnFlightCompany);

    return (
      <InputSelect
        options={airlines}
        value={selectedAirline}
        placeholder={texts.returnFlightCompanyPlaceholder}
        onChange={this.onChangeReturnFlightCompany}
        isClearable
        isSearchable
        noOptionsMessage={() => texts.noResult}
      />
    );
  };

  showExtraFields = () => this.setState({ shouldDisplayReturnFlightInformation: true });

  getLabelSpot = (spot) => {
    const { texts } = this.props;

    if (!spot) {
      return texts.spotLabelUnknown;
    }

    return spot.type === 'airport' ? texts.spotLabelAirport : texts.spotLabelUnknown;
  };

  render() {
    const {
      RootComponent,
      fromSpotsAvailable,
      toSpotsAvailable,
      fromSpot,
      toSpot,
      travelingNumberTo,
      returnFlightCompany,
      returnFlightOrigin,
      className,
      contentClassName,
      texts,
      ...cardProps
    } = this.props;
    const { shouldDisplayReturnFlightInformation } = this.state;
    const actualCardProps = {
      ...cardProps,
      className: [s.card, className].join(' '),
      contentClassName: [s.contentCard, contentClassName].join(' '),
    };

    return (
      <RootComponent {...actualCardProps}>
        {fromSpotsAvailable.length > 1 && (
          <div className={s.formContainer}>
            <h2 className={s.title}>{texts.inTitle}</h2>
            <div className={[s.row, s.halfWidth].join(' ')}>
              <InputLabel
                label={this.getLabelSpot(fromSpot)}
                mandatory
                InputComponent={this.renderFromZoneTerminal}
                className={[s.input, s.firstColumn].join(' ')}
              />
            </div>
          </div>
        )}
        <>
          {fromSpotsAvailable.length > 1 && (<h2 className={s.title}>{texts.outTitle}</h2>)}
          <div className={[
            s.row,
            !toSpot || (toSpotsAvailable.length <= 1 && toSpot.type !== 'station') ? s.halfWidth : undefined,
            fromSpotsAvailable.length <= 1 ? s.noMargin : undefined,
          ].join(' ')}
          >
            {toSpotsAvailable.length > 1 && (
              <InputLabel
                label={this.getLabelSpot(toSpot)}
                mandatory
                InputComponent={this.renderToZoneTerminal}
                className={[s.input, s.firstColumn].join(' ')}
              />
            )}
            {toSpot && (
              <InputLabel
                label={toSpot.type === 'airport' ? texts.travelingNumberToLabel : texts.travelingNumberToLabelTrain}
                placeholder={toSpot.type === 'airport' ? texts.travelingNumberToPlaceholder : texts.travelingNumberToPlaceholderTrain}
                value={travelingNumberTo}
                mandatory={!shouldDisplayReturnFlightInformation}
                className={[s.input, toSpotsAvailable.length > 1 ? s.secondColumn : s.firstColumn].join(' ')}
                onChange={this.onChangeTravelingNumberTo}
                autoComplete="off"
              />
            )}
            {toSpotsAvailable.length <= 1 && toSpot && toSpot.type === 'station' && (
              <InputLabel
                label={texts.returnFlightOriginLabel}
                placeholder={texts.returnFlightOriginPlaceholder}
                value={returnFlightOrigin}
                onChange={this.onChangeReturnFlightOrigin}
                className={[s.input, s.firstColumn].join(' ')}
                mandatory={shouldDisplayReturnFlightInformation}
                autoComplete="off"
              />
            )}
          </div>
          {toSpot && !shouldDisplayReturnFlightInformation && (
            <ActionLink
              label={texts.unknown}
              className={[s.actionLink, toSpotsAvailable.length <= 1 ? s.flexStart : s.flexEnd].join(' ')}
              onClick={this.showExtraFields}
            />
          )}
          {toSpot && shouldDisplayReturnFlightInformation && (
            <div className={s.description}>
              <span>{toSpot.type === 'airport' ? texts.switchMandatoryAirportDescription : texts.switchMandatoryStationDescription}</span>
            </div>
          )}
          {toSpot && toSpotsAvailable.length > 1 && (
            <div className={[s.row, toSpot.type === 'station' ? s.halfWidth : undefined].join(' ')}>
              <InputLabel
                label={texts.returnFlightOriginLabel}
                placeholder={texts.returnFlightOriginPlaceholder}
                value={returnFlightOrigin}
                onChange={this.onChangeReturnFlightOrigin}
                className={[s.input, s.firstColumn].join(' ')}
                mandatory={shouldDisplayReturnFlightInformation}
                autoComplete="off"
              />
              {toSpot.type === 'airport' && (
                <InputLabel
                  label={texts.returnFlightCompanyLabel}
                  value={returnFlightCompany}
                  className={[s.input, s.secondColumn].join(' ')}
                  InputComponent={this.renderAirlinesSelect}
                  mandatory={shouldDisplayReturnFlightInformation}
                />
              )}
            </div>
          )}
        </>
      </RootComponent>
    );
  }
}

FlightInformationForm.defaultProps = {
  // eslint-disable-next-line react/prop-types
  RootComponent: ({ children, ...cardProps }) => (<Card {...cardProps}>{children}</Card>),
  className: undefined,
  contentClassName: undefined,
  returnFlightCompany: undefined,
  returnFlightOrigin: undefined,
  airlines: [],
  texts: DefaultTexts,
  shouldDisplayReturnFlightInformation: false,
};

FlightInformationForm.propTypes = {
  RootComponent: PropTypes.func,
  className: PropTypes.string,
  contentClassName: PropTypes.string,
  fromSpotsAvailable: PropTypes.arrayOf(SpotType).isRequired,
  toSpotsAvailable: PropTypes.arrayOf(SpotType).isRequired,
  fromSpot: SpotType.isRequired,
  toSpot: SpotType.isRequired,
  travelingNumberTo: PropTypes.string.isRequired,
  returnFlightCompany: PropTypes.string,
  returnFlightOrigin: PropTypes.string,
  airlines: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
  })),
  texts: TextsType,
  onChange: PropTypes.func.isRequired,
  onClear: PropTypes.func.isRequired,
  shouldDisplayReturnFlightInformation: PropTypes.bool,
};

export default FlightInformationForm;
