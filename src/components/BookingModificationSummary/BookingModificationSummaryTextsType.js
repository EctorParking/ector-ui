import PropTypes from 'prop-types';

export default PropTypes.shape({
  title: PropTypes.string,
  date: PropTypes.string,
  spot: PropTypes.string,
});

const defaultTexts = {
  title: 'Aller',
  date: 'Mer. 26 septembre 2018 à 12:00',
  spot: 'Roissy CDG T1',
};

export { defaultTexts };
