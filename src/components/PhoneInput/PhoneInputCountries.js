import PropTypes from 'prop-types';
import frFlag from '../../assets/images/flags/fr.svg';
import gbFlag from '../../assets/images/flags/gb.svg';
import esFlag from '../../assets/images/flags/es.svg';
import deFlag from '../../assets/images/flags/de.svg';

export const DefaultCountries = [
  { value: 'fr', label: '+33', image: frFlag },
  { value: 'es', label: '+34', image: esFlag },
  { value: 'gb', label: '+44', image: gbFlag },
  { value: 'de', label: '+49', image: deFlag },
];

export const CountryPropType = PropTypes.shape({
  value: PropTypes.string,
  label: PropTypes.string,
  image: PropTypes.string,
});
