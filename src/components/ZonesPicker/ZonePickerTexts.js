import PropTypes from 'prop-types';

export const TextsType = PropTypes.shape({
  inputPlaceholder: PropTypes.string,
  suggestionCheckboxLabel: PropTypes.string,
});

export const DefaultTexts = {
  inputPlaceholder: 'Aéroport ou gare...',
  suggestionCheckboxLabel: 'Lieu de retour différent',
};
