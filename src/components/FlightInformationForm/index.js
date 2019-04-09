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

  onChangeSelect = (field, option) => {
    const { onChange } = this.props;

    onChange(field, option.value);
  };

  renderTerminalSelect = (fromOrTo) => {
    const {
      [`${fromOrTo}SpotsAvailable`]: spots,
      [`${fromOrTo}Spot`]: selectedSpot,
      texts,
    } = this.props;

    return (
      <InputSelect
        options={spots.map(spot => ({ value: spot.code, label: `${texts.spot} ${spot.shortName}` }))}
        value={selectedSpot ? { value: selectedSpot.code, label: `${texts.spot} ${selectedSpot.shortName}` } : undefined}
        placeholder={texts.placeholderSpot}
        onChange={fromOrTo === 'from' ? this.onChangeFromSpot : this.onChangeToSpot}
        isClearable
      />
    );
  };

  renderAirlinesSelect = () => {
    const {
      airlines,
      texts,
    } = this.props;

    return (
      <InputSelect
        options={airlines}
        placeholder={texts.returnFlightCompanyPlaceholder}
        onChange={this.onChangeReturnFlightCompany}
        isClearable
        isSearchable
      />
    );
  };

  showExtraFields = () => this.setState({ shouldDisplayReturnFlightInformation: true });

  render() {
    const {
      RootComponent,
      fromSpotsAvailable,
      toSpotsAvailable,
      toSpotType,
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
                label={texts.spot}
                mandatory
                InputComponent={this.renderFromZoneTerminal}
                className={[s.input, s.firstColumn].join(' ')}
              />
            </div>
          </div>
        )}
        <>
          {fromSpotsAvailable.length > 1 && (<h2 className={s.title}>{texts.outTitle}</h2>)}
          <div className={[s.row, toSpotsAvailable.length <= 1 ? s.halfWidth : undefined].join(' ')}>
            <InputLabel
              label={toSpotType === 'airport' ? texts.travelingNumberToLabel : texts.travelingNumberToLabelTrain}
              placeholder={toSpotType === 'airport' ? texts.travelingNumberToPlaceholder : texts.travelingNumberToPlaceholderTrain}
              value={travelingNumberTo}
              mandatory={!shouldDisplayReturnFlightInformation}
              className={[s.input, s.firstColumn].join(' ')}
              onChange={this.onChangeTravelingNumberTo}
            />
            {toSpotsAvailable.length > 1 && (
              <InputLabel
                label={texts.spot}
                mandatory
                InputComponent={this.renderToZoneTerminal}
                className={[s.input, s.secondColumn].join(' ')}
              />
            )}
          </div>
          {toSpotType === 'airport' && !shouldDisplayReturnFlightInformation && (
            <ActionLink
              label={texts.unknown}
              className={s.actionLink}
              onClick={this.showExtraFields}
            />
          )}
          {toSpotType === 'airport' && shouldDisplayReturnFlightInformation && (
            <div className={s.row}>
              <InputLabel
                label={texts.returnFlightCompanyLabel}
                value={returnFlightCompany}
                className={[s.input, s.firstColumn].join(' ')}
                InputComponent={this.renderAirlinesSelect}
                mandatory={shouldDisplayReturnFlightInformation}
              />
              <InputLabel
                label={texts.returnFlightOriginLabel}
                placeholder={texts.returnFlightOriginPlaceholder}
                value={returnFlightOrigin}
                onChange={this.onChangeReturnFlightOrigin}
                className={[s.input, s.secondColumn].join(' ')}
                mandatory={shouldDisplayReturnFlightInformation}
              />
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
  shouldDisplayReturnFlightInformation: PropTypes.bool,
  toSpotType: PropTypes.oneOf(['station', 'airport']).isRequired,
};

export default FlightInformationForm;
