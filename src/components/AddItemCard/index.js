import React from 'react';
import PropTypes from 'prop-types';
import s from './AddItemCard.css';
import Loader from '../Loader';
import LinkUnderlined from '../LinkUnderlined';

const AddItemCard = ({
  label,
  loading,
  onClick,
  center,
  children,
  forPaymentMethod,
  small,
  className,
  testid,
}) => {
  const containerClass = [s.addItemButton];
  const linkClass = [s.addItemButtonLink];
  const buttonPlusClass = [s.addItemButtonPlus];

  if (forPaymentMethod) {
    containerClass.push(s.forPaymentMethod);
  }

  if (center) {
    linkClass.push(s.linkCenter);
  }

  if (small) {
    buttonPlusClass.push(s.smallButtonPlus);
  }

  containerClass.push(className);

  return (
    <div className={containerClass.join(' ')}>
      <div className={s.addItemButtonContent}>
        <button
          type="button"
          onClick={onClick}
          className={buttonPlusClass.join(' ')}
        >
          {loading ? <Loader small={small} /> : '+'}
        </button>
        {children}
        {label &&
        label.length &&
        !loading && (
          <LinkUnderlined
            testid={testid}
            className={linkClass.join(' ')}
            onClick={onClick}
            type="button"
          >
            <span>{label}</span>
          </LinkUnderlined>
        )}
      </div>
    </div>
  );
};

AddItemCard.propTypes = {
  label: PropTypes.string,
  loading: PropTypes.bool,
  onClick: () => null,
  center: PropTypes.bool,
  children: PropTypes.node,
  forPaymentMethod: PropTypes.bool,
  small: PropTypes.bool,
  className: PropTypes.string,
  testid: PropTypes.string,
};

AddItemCard.defaultProps = {
  children: null,
  onClick: () => null,
  center: false,
  label: '',
  loading: false,
  forPaymentMethod: false,
  small: false,
  className: undefined,
  testid: '',
};

export default AddItemCard;
