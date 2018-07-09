import React from 'react';
// import PropTypes from 'prop-types';
import Select from '../Select';
import Input from '../input';

import s from './PhoneInput.css';

const values = [
    { value: 'fr', label: '+33', image: './images/flags/fr.png' },
    { value: 'uk', label: '+44', image: './images/flags/uk.png' },
];

class PhoneInput extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            countryCode: 'fr',
        };

        this.onCountryCodeChange = this.onCountryCodeChange.bind(this);
    }

    onCountryCodeChange(countryCode) {
        this.setState({ countryCode });
    }

    render() {
        const { countryCode } = this.state;

        return (
            <div className={s.phoneInput}>
                <Select
                    values={values}
                    selected={countryCode}
                    hasImage
                    onChange={this.onCountryCodeChange}
                />
                <Input
                    inputPlaceHolder="06 07 08 09 00"
                    inputType="text"
                />
            </div>
        );
    }
}

PhoneInput.defaultProps = {
};

PhoneInput.propTypes = {
};


export default PhoneInput;
