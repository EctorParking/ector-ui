import PropTypes from 'prop-types';

export default PropTypes.shape({
  modify: PropTypes.string,
  save: PropTypes.string,
  confirmDeletionTitle: PropTypes.string,
  confirmDeletionSentence: PropTypes.string,
  cancel: PropTypes.string,
  confirm: PropTypes.string,
});

export const DefaultTexts = {
  modify: 'Changer',
  save: 'Enregistrer',
  confirmDeletionTitle: 'Confirmation',
  confirmDeletionSentence:
    'Êtes-vous sûr(e) de vouloir supprimer ce véhicule ?',
  cancel: 'Annuler',
  confirm: 'Confirmer',
};
