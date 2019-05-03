import React from 'react';
import PropTypes from 'prop-types';
import {
  Card,
  InputLabel,
  InputSelect,
  ActionLink,
  Tooltip,
} from '..';
import s from './FlightInformationForm.module.css';
import { SpotType } from './SpotType';
import { TextsType, DefaultTexts } from './FlightInformationFormTexts';

class FlightInformationForm extends React.Component {
  static getDerivedStateFromProps(props, state) {
    const {
      shouldDisplayReturnFlightInformation: propShouldDisplayReturnFlightInformation,
    } = props;
    let { shouldDisplayReturnFlightInformation } = state;

    if (typeof propShouldDisplayReturnFlightInformation === 'boolean' && propShouldDisplayReturnFlightInformation !== shouldDisplayReturnFlightInformation) {
      shouldDisplayReturnFlightInformation = propShouldDisplayReturnFlightInformation;
    }
    return { shouldDisplayReturnFlightInformation };
  }

  constructor(props) {
    super(props);

    this.renderFromZoneTerminal = this.renderTerminalSelect.bind(this, 'from');
    this.renderToZoneTerminal = this.renderTerminalSelect.bind(this, 'to');
    this.onChangeTravelingNumberTo = this.onChange.bind(this, 'travelingNumberTo');
    this.onChangeReturnFlightOrigin = this.onChange.bind(this, 'returnFlightOrigin');
    this.onChangeReturnFlightCompany = this.onChangeSelect.bind(this, 'returnFlightCompany');
    this.onChangeFromSpot = this.onChangeSelect.bind(this, 'fromSpot');
    this.onChangeToSpot = this.onChangeSelect.bind(this, 'toSpot');

    this.onFocusTravelingNumberToInput = this.setTooltipVisibility.bind(
      this, 'showTravelingNumberToTooltip', true,
    );
    this.onBlurTravelingNumberToInput = this.setTooltipVisibility.bind(
      this, 'showTravelingNumberToTooltip', false,
    );

    this.onFocusReturnFlightCompanyInput = this.setTooltipVisibility.bind(
      this, 'showReturnFlightCompanyTooltip', true,
    );
    this.onBlurReturnFlightCompanyInput = this.setTooltipVisibility.bind(
      this, 'showReturnFlightCompanyTooltip', false,
    );

    this.onFocusReturnFlightOriginInput = this.setTooltipVisibility.bind(
      this, 'showReturnFlightOriginTooltip', true,
    );
    this.onBlurReturnFlightOriginInput = this.setTooltipVisibility.bind(
      this, 'showReturnFlightOriginTooltip', false,
    );

    this.state = {
      shouldDisplayReturnFlightInformation: false,
      showTravelingNumberToTooltip: false,
      showReturnFlightCompanyTooltip: false,
      showReturnFlightOriginTooltip: false,
    };
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

  setTooltipVisibility(tooltip, visible) {
    this.setState({ [tooltip]: visible });
  }

  renderTerminalSelect = (fromOrTo) => {
    const {
      [`${fromOrTo}SpotsAvailable`]: spots,
      values: { [`${fromOrTo}Spot`]: selectedSpot },
      errors: { [`${fromOrTo}Spot`]: selectedSpotError },
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
        error={selectedSpotError}
      />
    );
  };

  renderAirlinesSelect = () => {
    const {
      airlines,
      values: { returnFlightCompany },
      errors: { returnFlightCompany: returnFlightCompanyError },
      texts,
    } = this.props;
    const { shouldDisplayReturnFlightInformation, showReturnFlightCompanyTooltip } = this.state;
    const selectedAirline = airlines.find(airline => airline.value.toLowerCase() === (returnFlightCompany ? returnFlightCompany.toLowerCase() : ''));

    return (
      <>
        <Tooltip
          text={texts.returnFlightCompanyTooltip}
          visible={showReturnFlightCompanyTooltip}
          position="top"
          size="small"
          tooltipClassName={s.inputTooltip}
        />
        <InputSelect
          options={airlines}
          value={selectedAirline}
          placeholder={texts.returnFlightCompanyPlaceholder}
          onChange={this.onChangeReturnFlightCompany}
          isClearable
          isSearchable
          noOptionsMessage={() => texts.noResult}
          error={shouldDisplayReturnFlightInformation ? returnFlightCompanyError : null}
          onFocus={this.onFocusReturnFlightCompanyInput}
          onBlur={this.onBlurReturnFlightCompanyInput}
        />
      </>
    );
  };

  showExtraFields = () => {
    const { onDisplayFlightInformationClick } = this.props;

    this.setState({ shouldDisplayReturnFlightInformation: true });
    onDisplayFlightInformationClick();
  };

  getLabelSpot = (spot) => {
    const { texts } = this.props;

    if (!spot) {
      return texts.spotLabelUnknown;
    }

    return spot.type === 'airport' ? texts.spotLabelAirport : texts.spotLabelUnknown;
  };

  renderTravelingNumberToInputComponent = (props) => {
    const { texts, values: { toSpot } } = this.props;
    const { showTravelingNumberToTooltip } = this.state;

    return (
      <>
        <Tooltip
          text={toSpot && toSpot.type === 'airport' ? texts.travelingFlightNumberToTooltip : texts.travelingTrainNumberToTooltip}
          visible={showTravelingNumberToTooltip}
          position="top"
          tooltipClassName={s.inputTooltip}
        />
        <InputLabel {...props} />
      </>
    );
  };

  renderReturnFlightOriginInputComponent = (props) => {
    const { texts, values: { toSpot } } = this.props;
    const { showReturnFlightOriginTooltip } = this.state;

    return (
      <>
        <Tooltip
          text={toSpot && toSpot.type === 'airport' ? texts.returnFlightAirportOriginTooltip : texts.returnFlightStationOriginTooltip}
          visible={showReturnFlightOriginTooltip}
          position="top"
          size="small"
          tooltipClassName={s.inputTooltip}
        />
        <InputLabel {...props} />
      </>
    );
  };

  render() {
    const {
      RootComponent,
      ReturnFlightInformationComponent,
      fromSpotsAvailable,
      toSpotsAvailable,
      values: {
        fromSpot,
        toSpot,
        travelingNumberTo,
        returnFlightCompany,
        returnFlightOrigin,
      },
      errors,
      className,
      contentClassName,
      texts,
      travelingNumberToInputProps,
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
                value={fromSpot}
                mandatory
                InputComponent={this.renderFromZoneTerminal}
                className={[s.input, s.firstColumn].join(' ')}
                error={errors.fromSpot}
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
                value={toSpot}
                mandatory
                InputComponent={this.renderToZoneTerminal}
                className={[s.input, s.firstColumn].join(' ')}
                error={errors.toSpot}
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
                error={!shouldDisplayReturnFlightInformation ? errors.travelingNumberTo : null}
                onFocus={this.onFocusTravelingNumberToInput}
                onBlur={this.onBlurTravelingNumberToInput}
                InputComponent={this.renderTravelingNumberToInputComponent}
                {...travelingNumberToInputProps}
              />
            )}
            {toSpotsAvailable.length <= 1 && toSpot && toSpot.type === 'station' && shouldDisplayReturnFlightInformation && (
              <InputLabel
                label={texts.returnFlightOriginLabel}
                placeholder={texts.returnFlightOriginPlaceholder}
                value={returnFlightOrigin}
                onChange={this.onChangeReturnFlightOrigin}
                className={[s.input, s.firstColumn].join(' ')}
                mandatory={shouldDisplayReturnFlightInformation}
                autoComplete="off"
                error={shouldDisplayReturnFlightInformation ? errors.returnFlightOrigin : null}
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
            <ReturnFlightInformationComponent className={s.description}>
              <span>{toSpot.type === 'airport' ? texts.switchMandatoryAirportDescription : texts.switchMandatoryStationDescription}</span>
            </ReturnFlightInformationComponent>
          )}
          {toSpot && shouldDisplayReturnFlightInformation && (
            <div className={[s.row, toSpot.type === 'station' ? s.halfWidth : undefined].join(' ')}>
              {(toSpot.type !== 'station' || toSpotsAvailable.length > 1) && (
                <InputLabel
                  label={texts.returnFlightOriginLabel}
                  placeholder={texts.returnFlightOriginPlaceholder}
                  value={returnFlightOrigin}
                  onChange={this.onChangeReturnFlightOrigin}
                  className={[s.input, s.firstColumn].join(' ')}
                  mandatory={shouldDisplayReturnFlightInformation}
                  autoComplete="off"
                  error={shouldDisplayReturnFlightInformation ? errors.returnFlightOrigin : null}
                  InputComponent={this.renderReturnFlightOriginInputComponent}
                  onFocus={this.onFocusReturnFlightOriginInput}
                  onBlur={this.onBlurReturnFlightOriginInput}
                />
              )}
              {toSpot.type === 'airport' && shouldDisplayReturnFlightInformation && (
                <InputLabel
                  label={texts.returnFlightCompanyLabel}
                  value={returnFlightCompany}
                  className={[s.input, toSpotsAvailable.length > 1 ? s.secondColumn : s.firstColumn].join(' ')}
                  InputComponent={this.renderAirlinesSelect}
                  mandatory={shouldDisplayReturnFlightInformation}
                  error={shouldDisplayReturnFlightInformation ? errors.returnFlightCompany : null}
                  onFocus={this.onFocusReturnFlightCompanyInput}
                  onBlur={this.onBlurReturnFlightCompanyInput}
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
  airlines: [],
  texts: DefaultTexts,
  shouldDisplayReturnFlightInformation: false,
  travelingNumberToInputProps: {},
  ReturnFlightInformationComponent: props => <div {...props} />,
  onDisplayFlightInformationClick: () => null,
};

FlightInformationForm.propTypes = {
  RootComponent: PropTypes.func,
  ReturnFlightInformationComponent: PropTypes.func,
  className: PropTypes.string,
  contentClassName: PropTypes.string,
  fromSpotsAvailable: PropTypes.arrayOf(SpotType).isRequired,
  toSpotsAvailable: PropTypes.arrayOf(SpotType).isRequired,
  values: PropTypes.shape({
    fromSpot: SpotType,
    toSpot: SpotType,
    travelingNumberTo: PropTypes.string,
    returnFlightCompany: PropTypes.string,
    returnFlightOrigin: PropTypes.string,
  }).isRequired,
  errors: PropTypes.shape({
    fromSpot: PropTypes.string,
    toSpot: PropTypes.string,
    travelingNumberTo: PropTypes.string,
    returnFlightCompany: PropTypes.string,
    returnFlightOrigin: PropTypes.string,
  }).isRequired,
  airlines: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
  })),
  texts: TextsType,
  onChange: PropTypes.func.isRequired,
  onClear: PropTypes.func.isRequired,
  shouldDisplayReturnFlightInformation: PropTypes.bool,
  travelingNumberToInputProps: PropTypes.shape({
    RightInputComponent: PropTypes.func,
  }),
  onDisplayFlightInformationClick: PropTypes.func,
};

export default FlightInformationForm;
