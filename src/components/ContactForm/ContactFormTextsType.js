import PropTypes from 'prop-types';

export default PropTypes.shape({
  newDriver: PropTypes.string,
  addDriver: PropTypes.string,
  civility: PropTypes.string,
});

export const DefaultTexts = {
  newDriver: 'Ajouter un nouveau conducteur',
  addDriver: 'Ajouter ce conducteur',
  civility: 'Civilité',
  firstName: 'Prénom',
  lastName: 'Nom',
  firstNamePlaceholder: 'Alain',
  lastNamePlaceholder: 'Prost',
  email: 'Email',
  phone: 'Téléphone',
  postCode: 'Code postal',
  notMandatory: 'facultatif',
  emailPlaceholder: 'alain.prost@gmail.com',
  postCodePlaceholder: '44 100',
};
