import PropTypes from 'prop-types';

export const DefaultTexts = {
  select: 'Sélectionner',
  remove: 'Supprimer',
  save: 'Enregistrer',
  confirmDeletionTitle: 'Confirmation',
  confirmDeletionSentence: 'Êtes-vous sûr(e) de vouloir supprimer ce moyen de paiement ?',
  cancel: 'Annuler',
  confirm: 'Confirmer',
  expireAt: 'Exp',
};

export default PropTypes.shape({
  update: PropTypes.string,
  remove: PropTypes.string,
  save: PropTypes.string,
  confirmDeletionTitle: PropTypes.string,
  confirmDeletionSentence: PropTypes.string,
  cancel: PropTypes.string,
  confirm: PropTypes.string,
  expireAt: PropTypes.string,
});
