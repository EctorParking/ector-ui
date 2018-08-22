import PropTypes from 'prop-types';

export default PropTypes.shape({
  newDriver: PropTypes.string,
  addDriver: PropTypes.string,
  civility: PropTypes.string,
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  firstNamePlaceholder: PropTypes.string,
  lastNamePlaceholder: PropTypes.string,
  email: PropTypes.string,
  phone: PropTypes.string,
  postCode: PropTypes.string,
  notMandatory: PropTypes.string,
  emailPlaceholder: PropTypes.string,
  postCodePlaceholder: PropTypes.string,
  male: PropTypes.string,
  female: PropTypes.string,
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
  male: 'Mr',
  female: 'Mme',
};
