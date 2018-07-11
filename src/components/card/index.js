import React from 'react';
import PropTypes from 'prop-types';

import s from './card.css';


const CardFooter = ({ FooterChildren }) => (

  <div className={s.card_footer}>
    { FooterChildren }
  </div>

);

CardFooter.defaultProps = {
  FooterChildren: null,
};

CardFooter.propTypes = {
  FooterChildren: PropTypes.node,
};


const Card = ({
  children, FooterChildren, isSelected, onClick, className, contentClassName,
}) => {
  const isClickable = typeof onClick === 'function' && !isSelected;

  const cardClassName = `
        ${s.card}
        ${isSelected ? s.card_selected : ''}
        ${isClickable ? s.card_clickable : ''}
        ${className}
    `;

  return (

  /* eslint-disable */
        <div
            className={cardClassName}
            onClick={onClick}
        >

            <div className={`${s.card_content} ${contentClassName}`}>
                { children }
            </div>
            { FooterChildren &&
                <CardFooter
                    FooterChildren={FooterChildren}
                />
            }
        </div>
        /* eslint-enable */
  );
};

Card.defaultProps = {
  FooterChildren: null,
  isSelected: false,
  onClick: null,
  className: '',
  contentClassName: '',
};

Card.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  FooterChildren: PropTypes.node,
  onClick: PropTypes.func,
  isSelected: PropTypes.bool,
  className: PropTypes.string,
  contentClassName: PropTypes.string,
};


export default Card;
