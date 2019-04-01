import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import {
  Card, CardTitle, InputLabel, ActionLink,
} from '..';
import TextsType, { DefaultTexts } from './CardTravelInformationTextsType';

import s from './CardTravelInformation.module.css';

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

  renderReturnFlightCompany = () => {
    const { values, texts } = this.props;

    if (!values.returnFlightCompany || values.returnFlightCompany === '') {
      return null;
    }
    return (
      <Fragment>
        <div>
          {texts.travelingNumberTo}
&nbsp;:&nbsp;
          {values.travelingNumberTo || texts.blank}
        </div>
        <div>
          {texts.returnFlightCompany}
&nbsp;:&nbsp;
          {values.returnFlightCompany}
        </div>
        <div>
          {texts.returnFlightOrigin}
          &nbsp;:&nbsp;
          {values.returnFlightOrigin || texts.blank}
        </div>
      </Fragment>
    );
  };

  render() {
    const {
      texts,
      inputClassName,
      onClickUnknownTravelingNumberTo,
      values,
      errors,
      unknownTravelingNumberToClassName,
      travelingNumberToClassName,
      travelingNumberFromClassName,
      ...cardProps
    } = this.props;

    const hasFilledReturnFlightCompany = values.returnFlightCompany !== null
      && values.returnFlightCompany.length > 0;

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
            className={[s.travelingNumberFromInputLabel, travelingNumberFromClassName].join(' ')}
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
            InputComponent={this.renderReturnFlightCompany}
          />
        </div>
        <div className={[s.unknownTravelingNumberTo, unknownTravelingNumberToClassName].join(' ')}>
          <ActionLink
            className={s.unknownTravelingNumberToButton}
            label={hasFilledReturnFlightCompany
              ? texts.updateReturnFlightCompany
              : texts.unknownTravelingNumberTo
            }
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
    returnFlightCompany: null,
    returnFlightOrigin: null,
  },
  errors: {
    travelingNumberFrom: null,
    travelingNumberTo: null,
  },
  unknownTravelingNumberToClassName: '',
  travelingNumberToClassName: '',
  travelingNumberFromClassName: '',
};

CardTravelInformation.propTypes = {
  values: PropTypes.shape({
    travelingNumberFrom: PropTypes.string,
    travelingNumberTo: PropTypes.string,
    returnFlightCompany: PropTypes.string,
    returnFlightOrigin: PropTypes.string,
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
  travelingNumberFromClassName: PropTypes.string,
};


export default CardTravelInformation;
