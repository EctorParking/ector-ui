import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Card, CardTitle, InputLabel, ActionLink } from '../';
import TextsType, { DefaultTexts } from './CardTravelInformationTextsType';

import s from './CardTravelInformation.css';

class CardTravelInformation extends Component {
  constructor(props) {
    super(props);

    this.state = {
      values: {
        travelingNumberFrom: '',
        travelingNumberTo: '',
      },
    };

    this.handleChangeTravelingNumberFrom = this.handleChange.bind(this, 'travelingNumberFrom');
    this.handleChangeTravelingNumberTo = this.handleChange.bind(this, 'travelingNumberTo');
  }

  handleChange(field, event) {
    const { onChangeProperty } = this.props;

    this.setState({
      values: {
        ...this.state.values,
        [field]: event.currentTarget.value,
      },
    });
    onChangeProperty(field, event.currentTarget.value);
  }

  render() {
    const {
      texts,
      className,
      inputClassName,
      onClickUnknownTravelingNumberTo,
    } = this.props;
    const { values } = this.state;

    return (
      <Card>
        <CardTitle className={[s.title, className].join(' ')}>
          {texts.title}
        </CardTitle>

        <div className={s.inputsRow}>
          <InputLabel
            placeholder={texts.travelingNumberFromPlaceholder}
            label={texts.travelingNumberFromLabel}
            onChange={this.handleChangeTravelingNumberFrom}
            className={s.travelingNumberFromInputLabel}
            inputClassName={inputClassName}
            value={values.travelingNumberFrom}
          />
          <div>
            <InputLabel
              mandatory
              placeholder={texts.travelingNumberToPlaceholder}
              label={texts.travelingNumberToLabel}
              onChange={this.handleChangeTravelingNumberTo}
              value={values.travelingNumberTo}
              className={s.travelingNumberToInputLabel}
              inputClassName={inputClassName}
            />
            <ActionLink
              label={texts.unknownTravelingNumberTo}
              className={s.unknownTravelingNumberTo}
              onClick={onClickUnknownTravelingNumberTo}
            />
          </div>
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
};

CardTravelInformation.propTypes = {
  texts: TextsType,
  className: PropTypes.string,
  onChangeProperty: PropTypes.func,
  inputClassName: PropTypes.string,
  onClickUnknownTravelingNumberTo: PropTypes.func,
};


export default CardTravelInformation;
