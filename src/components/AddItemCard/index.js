import React from 'react';
import PropTypes from 'prop-types';
import s from './AddItemCard.css';
import Card from '../Card';
import AddItemCardFooter from './AddItemCardFooter';
import AddItemCardButtonPlus from './AddItemCardButtonPlus';

const AddItemCard = ({
  label,
  isPending,
  onClick,
  children,
  testid,
  loaderSize,
  buttonClassName,
  linkClassName,
  ...cardProps
}) => {
  const buttonPlus = (
    <AddItemCardButtonPlus
      onClick={onClick}
      isPending={isPending}
      loaderSize={loaderSize}
      className={buttonClassName}
    />
  );

  const linkUnderlined = (
    <AddItemCardFooter
      onClick={onClick}
      testid={testid}
      label={label}
      className={linkClassName}
    />
  );

  return (
    <Card
      {...cardProps}
      footerChildren={linkUnderlined}
      contentClassName={s.addItemButtonContent}
    >
      {children !== null ? children : null}
      {children === null && buttonPlus}
      {children === null && linkUnderlined}
    </Card>
  );
};

AddItemCard.propTypes = {
  label: PropTypes.string,
  isPending: PropTypes.bool,
  onClick: () => null,
  children: PropTypes.node,
  testid: PropTypes.string,
  loaderSize: PropTypes.oneOf(['xSmall', 'small', 'medium', 'large']),
  buttonClassName: PropTypes.string,
  linkClassName: PropTypes.string,
};

AddItemCard.defaultProps = {
  children: null,
  onClick: () => null,
  label: '',
  isPending: false,
  testid: '',
  loaderSize: 'small',
  buttonClassName: undefined,
  linkClassName: undefined,
};

export default AddItemCard;
