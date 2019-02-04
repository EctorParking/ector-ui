import PropTypes from 'prop-types';

export default PropTypes.shape({
  initialPrice: PropTypes.string,
  routingFee: PropTypes.string,
  parkingFee: PropTypes.string,
  administrativeFee: PropTypes.string,
  leftToPay: PropTypes.string,
});

const defaultTexts = {
  initialPrice: 'Prix initial',
  routingFee: 'Acheminement',
  parkingFee: 'Durée de stationnement supplémentaire',
  administrativeFee: 'Frais de dossier*',
  total: 'Total reste à payer',
};

export { defaultTexts };
