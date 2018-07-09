import React from 'react';
import PropTypes from 'prop-types';
import SelectValue from './SelectValue';
import SelectValueType from './SelectValueType';

import s from './Select.css';

const getSelectedValue = (values, selected) => values.find(({ value }) => value === selected);

const Select = ({
    values,
    hasImage,
    selected,
    onChange,
}) => (
    <div className={s.select}>
        <select onChange={e => onChange(e.target.value)} defaultValue={selected}>
            {values.map(value => (
                <SelectValue
                    value={value}
                    key={value.value}
                />
            ))}
        </select>
        {
            hasImage &&
            <img
                src={getSelectedValue(values, selected).image}
                className={s.selectImage}
                alt={getSelectedValue(values, selected).label}
            />
        }
        <span className={s.label}>
            {getSelectedValue(values, selected).label}
        </span>
    </div>
);

Select.defaultProps = {
    hasImage: false,
    onChange: () => {},
};

Select.propTypes = {
    values: PropTypes.arrayOf(SelectValueType).isRequired,
    hasImage: PropTypes.bool,
    selected: PropTypes.string.isRequired,
    onChange: PropTypes.func,
};


export default Select;
