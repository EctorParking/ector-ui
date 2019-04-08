import React from 'react';
import PropTypes from 'prop-types';
import {
  Card,
  InputLabel,
  Select,
} from '..';
import s from './FlightInformationForm.module.css';
import { ZoneType, SpotType } from './SpotAndZoneType';

class FlightInformationForm extends React.Component {
  constructor(props) {
    super(props);

    this.renderFromZoneTerminal = this.renderTerminalSelect.bind(this, 'from');
    this.renderToZoneTerminal = this.renderTerminalSelect.bind(this, 'to');
  }

  renderOption = option => (
    <option value={option.code} className={s.defaultOption}>
      Terminal
      {' '}
      {option.shortName}
    </option>
  );

  renderTerminalSelect = (fromOrTo) => {
    const { [`${fromOrTo}Zone`]: { spots }, [`${fromOrTo}Spot`]: selectedSpot } = this.props;

    return (
      <Select
        options={spots}
        value={selectedSpot ? `Terminal ${selectedSpot.shortName}` : 'Choisir un terminal'}
        className={s.select}
        renderOption={this.renderOption}
      />
    );
  };

  render() {
    const {
      RootComponent,
      fromZone,
      travelingNumberTo,
      returnFlightCompany,
      returnFlightOrigin,
      className,
      contentClassName,
      ...cardProps
    } = this.props;

    const actualCardProps = {
      ...cardProps,
      className: [s.card, className].join(' '),
      contentClassName: [s.contentCard, contentClassName].join(' '),
    };

    return (
      <RootComponent {...actualCardProps}>
        {fromZone.spots.length > 1 && (
          <div className={s.formContainer}>
            <h2 className={s.title}>Aller</h2>
            <div className={[s.row, s.halfWidth].join(' ')}>
              <InputLabel
                label="Terminal"
                mandatory
                InputComponent={this.renderFromZoneTerminal}
                className={[s.input, s.firstColumn].join(' ')}
              />
            </div>
          </div>
        )}
        <>
          <h2 className={s.title}>Retour</h2>
          <div className={s.row}>
            <InputLabel
              label="N° de vol"
              placeholder="Ex: AFR123"
              value={travelingNumberTo}
              mandatory
              className={[s.input, s.firstColumn].join(' ')}
            />
            <InputLabel
              label="Terminal"
              mandatory
              InputComponent={this.renderToZoneTerminal}
              className={[s.input, s.secondColumn].join(' ')}
            />
          </div>
          <div className={s.row}>
            <InputLabel
              label="Compagnie aérienne"
              placeholder="Ex: Air France"
              value={returnFlightCompany}
              className={[s.input, s.firstColumn].join(' ')}
            />
            <InputLabel
              label="Ville de provenance"
              placeholder="Ex: Londres"
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
};

FlightInformationForm.propTypes = {
  RootComponent: PropTypes.func,
  className: PropTypes.string,
  contentClassName: PropTypes.string,
  fromZone: ZoneType.isRequired,
  toZone: ZoneType.isRequired,
  fromSpot: SpotType.isRequired,
  toSpot: SpotType.isRequired,
  travelingNumberTo: PropTypes.string.isRequired,
  returnFlightCompany: PropTypes.string,
  returnFlightOrigin: PropTypes.string,
};

export default FlightInformationForm;
