import PropTypes from 'prop-types';

export default PropTypes.shape({
  addOption: PropTypes.string,
  total: PropTypes.string,
});

const defaultTexts = {
  addOption: 'Ajouter une option',
  total: 'Total TTC',
};

export { defaultTexts };
