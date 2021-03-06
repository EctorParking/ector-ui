import React from 'react';
import PropTypes from 'prop-types';
import s from './Title.module.css';

export const TitleVariants = {
  underlined: 'underlined',
  none: 'none',
};

const Title = ({
  label,
  className,
  htmlElement,
  testid,
  variant,
  elementClassName,
}) => {
  if (variant === TitleVariants.underlined) {
    return (
      <div className={`${s.title} ${className}`} testid={testid}>
        {React.createElement(
          htmlElement,
          { className: [s.element, elementClassName].join(' ') },
          label
        )}
        <hr className={s.horizontalRule} />
      </div>
    );
  }
  if (variant === TitleVariants.none) {
    return React.createElement(
      htmlElement,
      { className: `${s.newTitle} ${className}` },
      label,
      testid
    );
  }
  return null;
};

Title.defaultProps = {
  className: '',
  elementClassName: undefined,
  htmlElement: 'h1',
  testid: '',
  variant: TitleVariants.underlined,
};

Title.propTypes = {
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
  className: PropTypes.string,
  htmlElement: PropTypes.string,
  testid: PropTypes.string,
  variant: PropTypes.oneOf(Object.keys(TitleVariants)),
  elementClassName: PropTypes.string,
};

export default Title;
