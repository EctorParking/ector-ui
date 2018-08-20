import PropTypes from 'prop-types';

export default PropTypes.shape({
  pickup: PropTypes.string,
  return: PropTypes.string,
});

const defaultTexts = {
  pickup: 'Prise en charge',
  return: 'Restitution',
};

export { defaultTexts };
