import PropTypes from 'prop-types';

export const TextsType = PropTypes.shape({
  startPlaceholder: PropTypes.string,
  endPlaceholder: PropTypes.string,
  timePlaceholder: PropTypes.string,
});

export const DefaultTexts = {
  startPlaceholder: 'Départ',
  endPlaceholder: 'Retour',
  timePlaceholder: 'Heure',
};
