import React from 'react';
import PropTypes from 'prop-types';
import {
  Card,
  InputLabel,
  Select,
} from '..';
import s from './FlightInformationForm.module.css';
import { SpotType } from './SpotType';
import { TextsType, DefaultTexts } from './FlightInformationFormTexts';

class FlightInformationForm extends React.Component {
  constructor(props) {
    super(props);

    this.renderFromZoneTerminal = this.renderTerminalSelect.bind(this, 'from');
    this.renderToZoneTerminal = this.renderTerminalSelect.bind(this, 'to');
  }

  renderOption = (option) => {
    const { texts } = this.props;

    return (
      <option value={option.code}>
        {`${texts.spot} ${option.shortName}`}
      </option>
    );
  };

  renderTerminalSelect = (fromOrTo) => {
    const {
      [`${fromOrTo}SpotsAvailable`]: spots,
      [`${fromOrTo}Spot`]: selectedSpot,
      texts,
    } = this.props;

    return (
      <Select
        options={spots}
        value={selectedSpot ? `${texts.spot} ${selectedSpot.shortName}` : texts.placeholderSpot}
        className={[s.select, selectedSpot ? undefined : s.defaultOption].join(' ')}
        renderOption={this.renderOption}
      />
    );
  };

  render() {
    const {
      RootComponent,
      fromSpotsAvailable,
      toSpotsAvailable,
      travelingNumberTo,
      returnFlightCompany,
      returnFlightOrigin,
      className,
      contentClassName,
      texts,
      ...cardProps
    } = this.props;

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
              label={texts.travelingNumberToLabel}
              placeholder={texts.travelingNumberToPlaceholder}
              value={travelingNumberTo}
              mandatory
              className={[s.input, s.firstColumn].join(' ')}
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
          <div className={s.row}>
            <InputLabel
              label={texts.returnFlightCompanyLabel}
              placeholder={texts.returnFlightCompanyPlaceholder}
              value={returnFlightCompany}
              className={[s.input, s.firstColumn].join(' ')}
            />
            <InputLabel
              label={texts.returnFlightOriginLabel}
              placeholder={texts.returnFlightOriginPlaceholder}
              value={returnFlightOrigin}
              className={[s.input, s.secondColumn].join(' ')}
            />
          </div>
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
  texts: DefaultTexts,
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
  texts: TextsType,
};

export default FlightInformationForm;
