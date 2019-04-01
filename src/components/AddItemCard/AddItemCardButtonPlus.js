import React from 'react';
import PropTypes from 'prop-types';
import s from './AddItemCard.module.css';
import Loader from '../Loader';

const AddItemCardButtonPlus = ({
  isPending,
  onClick,
  loaderSize,
  className,
}) => (
  <button
    type="button"
    onClick={onClick}
    className={[s.addItemButtonPlus, s.smallButtonPlus, className].join(' ')}
  >
    {isPending ? <Loader size={loaderSize} /> : '+'}
  </button>
);

AddItemCardButtonPlus.propTypes = {
  isPending: PropTypes.bool,
  onClick: () => null,
  loaderSize: PropTypes.oneOf(['xSmall', 'small', 'medium', 'large']),
  className: PropTypes.string,
};

AddItemCardButtonPlus.defaultProps = {
  onClick: () => null,
  isPending: false,
  loaderSize: 'small',
  className: undefined,
};

export default AddItemCardButtonPlus;
