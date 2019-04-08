import React from 'react';
import PropTypes from 'prop-types';
import {
  Card,
  InputLabel,
  Select,
} from '..';
import s from './FlightInformationForm.module.css';

class FlightInformationForm extends React.Component {
  renderTerminalSelect = () => (
    <Select options={['Terminal T1']} value=" " className={s.select}>
      <option value=" " className={s.defaultOption}>Choisir un terminal</option>
    </Select>
  );

  render() {
    const {
      RootComponent, className, contentClassName, ...cardProps
    } = this.props;

    const actualCardProps = {
      ...cardProps,
      className: [s.card, className].join(' '),
      contentClassName: [s.contentCard, contentClassName].join(' '),
    };

    return (
      <RootComponent {...actualCardProps}>
        <>
          <h2 className={s.title}>Aller</h2>
          <div className={[s.row, s.halfWidth].join(' ')}>
            <InputLabel
              label="Terminal"
              mandatory
              InputComponent={this.renderTerminalSelect}
              className={[s.input, s.firstColumn].join(' ')}
            />
          </div>
        </>
        <div className={s.formContainer}>
          <h2 className={s.title}>Retour</h2>
          <div className={s.row}>
            <InputLabel
              label="N° de vol"
              placeholder="Ex: AFR123"
              mandatory
              className={[s.input, s.firstColumn].join(' ')}
            />
            <InputLabel
              label="Terminal"
              mandatory
              InputComponent={this.renderTerminalSelect}
              className={[s.input, s.secondColumn].join(' ')}
            />
          </div>
          <div className={s.row}>
            <InputLabel
              label="Compagnie aérienne"
              placeholder="Ex: Air France"
              className={[s.input, s.firstColumn].join(' ')}
            />
            <InputLabel
              label="Ville de provenance"
              placeholder="Ex: Londres"
              className={[s.input, s.secondColumn].join(' ')}
            />
          </div>
        </div>
      </RootComponent>
    );
  }
}

FlightInformationForm.defaultProps = {
  // eslint-disable-next-line react/prop-types
  RootComponent: ({ children, ...cardProps }) => (<Card {...cardProps}>{children}</Card>),
  className: undefined,
  contentClassName: undefined,
};

FlightInformationForm.propTypes = {
  RootComponent: PropTypes.func,
  className: PropTypes.string,
  contentClassName: PropTypes.string,
};

export default FlightInformationForm;
