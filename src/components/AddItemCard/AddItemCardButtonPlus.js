import React from 'react';
import PropTypes from 'prop-types';
import s from './AddItemCard.css';
import Loader from '../Loader';

const AddItemCardButtonPlus = ({
  isPending,
  onClick,
  loaderSize,
  className,
}) => {
  const buttonPlusClass = [s.addItemButtonPlus];

  return (
    <button
      type="button"
      onClick={onClick}
      className={[className, buttonPlusClass].join(' ')}
    >
      {isPending ? <Loader size={loaderSize} /> : '+'}
    </button>
  );
};

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
