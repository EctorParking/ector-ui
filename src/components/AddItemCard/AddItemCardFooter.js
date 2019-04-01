import React from 'react';
import PropTypes from 'prop-types';
import s from './AddItemCard.module.css';
import LinkUnderlined from '../LinkUnderlined';

const AddItemCardFooter = ({
  label,
  onClick,
  testid,
  className,
}) => {
  const linkClass = [s.addItemButtonLink, s.linkCenter];

  return (
    <LinkUnderlined
      testid={testid}
      className={[className, linkClass].join(' ')}
      onClick={onClick}
      type="button"
    >
      <span>{label}</span>
    </LinkUnderlined>
  );
};

AddItemCardFooter.propTypes = {
  label: PropTypes.string,
  onClick: () => null,
  testid: PropTypes.string,
  className: PropTypes.string,
};

AddItemCardFooter.defaultProps = {
  onClick: () => null,
  label: '',
  testid: '',
  className: undefined,
};

export default AddItemCardFooter;
