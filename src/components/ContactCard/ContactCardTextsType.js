import PropTypes from 'prop-types';

export default PropTypes.shape({
  modify: PropTypes.string,
  delete: PropTypes.string,
  save: PropTypes.string,
  confirmDeletionTitle: PropTypes.string,
  confirmDeletionSentence: PropTypes.string,
  cancel: PropTypes.string,
  confirm: PropTypes.string,
});

export const DefaultTexts = {
  modify: 'Changer',
  delete: 'Supprimer',
  save: 'Enregistrer',
  confirmDeletionTitle: 'Confirmation',
  confirmDeletionSentence: 'Êtes-vous sûr(e) de vouloir supprimer ce contact ?',
  cancel: 'Annuler',
  confirm: 'Confirmer',
};
