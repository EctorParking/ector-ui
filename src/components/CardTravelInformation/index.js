import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Card, CardTitle, InputLabel, ActionLink } from '../';
import TextsType, { DefaultTexts } from './CardTravelInformationTextsType';

import s from './CardTravelInformation.css';

class CardTravelInformation extends Component {
  constructor(props) {
    super(props);

    this.handleChangeTravelingNumberFrom = this.handleChange.bind(this, 'travelingNumberFrom');
    this.handleChangeTravelingNumberTo = this.handleChange.bind(this, 'travelingNumberTo');
  }

  handleChange(field, event) {
    const { onChangeProperty } = this.props;

    onChangeProperty(field, event.currentTarget.value);
  }

  render() {
    const {
      texts,
      inputClassName,
      onClickUnknownTravelingNumberTo,
      values,
      errors,
      unknownTravelingNumberToClassName,
      travelingNumberToClassName,
      ...cardProps
    } = this.props;

    return (
      <Card {...cardProps}>
        <CardTitle className={s.title}>
          {texts.title}
        </CardTitle>

        <div className={s.inputsRow}>
          <InputLabel
            placeholder={texts.travelingNumberFromPlaceholder}
            label={texts.travelingNumberFromLabel}
            onChange={this.handleChangeTravelingNumberFrom}
            className={s.travelingNumberFromInputLabel}
            inputClassName={inputClassName}
            value={values.travelingNumberFrom || ''}
            error={errors.travelingNumberFrom}
            id="travelingNumberFromInput"
          />
          <InputLabel
            mandatory
            placeholder={texts.travelingNumberToPlaceholder}
            label={texts.travelingNumberToLabel}
            onChange={this.handleChangeTravelingNumberTo}
            value={values.travelingNumberTo || ''}
            error={errors.travelingNumberTo}
            className={[s.travelingNumberToInputLabel, travelingNumberToClassName].join(' ')}
            inputClassName={inputClassName}
            id="travelingNumberToInput"
          />
        </div>
        <div className={[s.unknownTravelingNumberTo, unknownTravelingNumberToClassName].join(' ')}>
          <ActionLink
            className={s.unknownTravelingNumberToButton}
            label={texts.unknownTravelingNumberTo}
            onClick={onClickUnknownTravelingNumberTo}
            id="unknownFlightNumberButton"
          />
        </div>
      </Card>
    );
  }
}

CardTravelInformation.defaultProps = {
  texts: DefaultTexts,
  className: '',
  inputClassName: '',
  onChangeProperty: () => {},
  onClickUnknownTravelingNumberTo: () => {},
  values: {
    travelingNumberFrom: null,
    travelingNumberTo: null,
  },
  errors: {
    travelingNumberFrom: null,
    travelingNumberTo: null,
  },
  unknownTravelingNumberToClassName: '',
  travelingNumberToClassName: '',
};

CardTravelInformation.propTypes = {
  values: PropTypes.shape({
    travelingNumberFrom: PropTypes.string,
    travelingNumberTo: PropTypes.string,
  }),
  errors: PropTypes.shape({
    travelingNumberFrom: PropTypes.string,
    travelingNumberTo: PropTypes.string,
  }),
  texts: TextsType,
  className: PropTypes.string,
  onChangeProperty: PropTypes.func,
  inputClassName: PropTypes.string,
  onClickUnknownTravelingNumberTo: PropTypes.func,
  unknownTravelingNumberToClassName: PropTypes.string,
  travelingNumberToClassName: PropTypes.string,
};


export default CardTravelInformation;
