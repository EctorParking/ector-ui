import React from 'react';
import PropTypes from 'prop-types';

import s from './Card.css';

const CardFooter = ({ className, FooterChildren }) => (

  <div className={`${s.card_footer} ${className}`}>
    { FooterChildren }
  </div>

);

CardFooter.defaultProps = {
  FooterChildren: null,
  className: '',
};

CardFooter.propTypes = {
  FooterChildren: PropTypes.node,
  className: PropTypes.string,
};

const CardHeader = ({ HeaderChildren }) => (
  <div>
    { HeaderChildren }
  </div>

);

CardHeader.defaultProps = {
  HeaderChildren: null,
};

CardHeader.propTypes = {
  HeaderChildren: PropTypes.node,
};

const Card = ({
  children,
  FooterChildren,
  HeaderChildren,
  isSelected,
  onClick,
  className,
  contentClassName,
  footerClassName,
  LabelComponent,
  testid,
  FooterComponent,
}) => {
  const isClickable = typeof onClick === 'function' && !isSelected;

  const cardClassName = `
    ${s.card}
    ${isSelected ? s.card_selected : ''}
    ${isClickable ? s.card_clickable : ''}
    ${className}
  `;

  return (
    <div
      role="presentation"
      className={cardClassName}
      onClick={onClick}
      testid={testid}
    >
      { HeaderChildren &&
        <CardHeader
          HeaderChildren={HeaderChildren}
        />
      }
      {React.createElement(LabelComponent, { className: s.label })}
      <div className={`${s.card_content} ${contentClassName}`}>
        { children }
      </div>
      { FooterChildren &&
        <CardFooter
          className={footerClassName}
          FooterChildren={FooterChildren}
        />
      }
      <FooterComponent className={s.card_footer} />
    </div>
  );
};

Card.defaultProps = {
  FooterChildren: null,
  HeaderChildren: null,
  isSelected: false,
  onClick: null,
  className: '',
  contentClassName: '',
  footerClassName: '',
  testid: '',
  LabelComponent: () => null,
  FooterComponent: () => null,
};

Card.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  FooterChildren: PropTypes.node,
  HeaderChildren: PropTypes.node,
  onClick: PropTypes.func,
  isSelected: PropTypes.bool,
  className: PropTypes.string,
  contentClassName: PropTypes.string,
  footerClassName: PropTypes.string,
  testid: PropTypes.string,
  LabelComponent: PropTypes.func,
  FooterComponent: PropTypes.func,
};


export default Card;
