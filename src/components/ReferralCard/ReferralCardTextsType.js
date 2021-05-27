import PropTypes from 'prop-types';

export default PropTypes.shape({
  title: PropTypes.string,
  description: PropTypes.string,
});

const defaultTexts = {
  title: 'Aidez Ector à conquérir le monde',
  description:
    'Devenez parrain Ector et faites profiter à votre filleul de 10€ offert lors de sa première réservation',
};

export { defaultTexts };
