import React from 'react';
import PropTypes from 'prop-types';
import { components } from 'react-select';
import { InputSelect } from '../index';
import s from './LanguageSelector.module.css';

const LanguageType = PropTypes.shape({
  name: PropTypes.string.isRequired,
  locale: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
});

const LanguageSelector = ({
  languages,
  value,
  onChange,
  id,
  className,
  ...selectProps
}) => {
  const getSelectValueFromLocale = localeValue =>
    languages
      .map(({ image, name, locale }) => ({
        value: locale,
        label: name,
        image,
      }))
      .find(language => language.value === localeValue);

  const Option = ({ data, ...props }) => (
    <div className={s.optionContainer}>
      <img className={s.flag} src={data.image} alt={`flag-${data.locale}`} />
      <components.Option {...props} data={data} />
    </div>
  );

  const SingleValue = ({ children, data, ...props }) => (
    <components.SingleValue {...props} data={data}>
      <div className={s.singleValueContainer}>
        <img
          className={s.flagInput}
          src={data.image}
          alt={`flag-${data.locale}`}
        />
        {children}
      </div>
    </components.SingleValue>
  );

  Option.propTypes = {
    data: PropTypes.shape(LanguageType).isRequired,
  };

  SingleValue.propTypes = {
    data: PropTypes.shape(LanguageType).isRequired,
    children: PropTypes.node.isRequired,
  };

  return (
    <InputSelect
      id={id}
      options={languages.map(({ locale, name, image }) => ({
        value: locale,
        label: name,
        image,
      }))}
      onChange={option => onChange(option.value)}
      components={{ Option, SingleValue }}
      value={getSelectValueFromLocale(value)}
      classname={[s.select, className].join(' ')}
      {...selectProps}
    />
  );
};

LanguageSelector.defaultProps = {
  id: 'communication-locale',
  className: undefined,
};

LanguageSelector.propTypes = {
  languages: PropTypes.arrayOf(LanguageType).isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  id: PropTypes.string,
  className: PropTypes.string,
};
export default LanguageSelector;
