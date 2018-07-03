import React from 'react';
import s from './ContactForm.css';
import ContactFormTextsType from './ContactFormTextsType';
import Card from '../card';
import Input from '../input';
import GenderPicker from '../GenderPicker';
import PhoneInput from '../PhoneInput';
import LinkUnderlined from '../link-underlined';

const genders = [
    { value: 'male', label: 'Mr' },
    { value: 'female', label: 'Mme' },
];

class ContactForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            selected: false,
        };

        this.setSelected = this.setSelected.bind(this);
        this.setNotSelected = this.setNotSelected.bind(this);
    }

    setSelected() {
        this.setState({ selected: true });
    }

    setNotSelected() {
        this.setState({ selected: false });
    }

    render() {
        const { texts } = this.props;
        const { selected } = this.state;
        const {
            addDriver,
            newDriver,
            civility,
            firstName,
            firstNamePlaceholder,
            lastName,
            lastNamePlaceholder,
            email,
            emailPlaceholder,
            phone,
            postCode,
            postCodePlaceholder,
            notMandatory,
        } = texts;

        const footer = (
            <div className={s.footer}>
                <LinkUnderlined>{addDriver}</LinkUnderlined>
            </div>
        );

        return (
            <Card
                FooterChildren={footer}
                isSelected={selected}
            >
                <span className={s.title}>{newDriver}</span>

                <div className={s.columns}>
                    <div>
                        <label
                            htmlFor="civility"
                            className={s.field}
                        >
                            <span className={s.label}>
                                {civility}
                            </span>

                            <GenderPicker
                                genders={genders}
                            />
                        </label>
                        <label
                            htmlFor="first-name"
                            className={s.field}
                        >
                            <span className={s.label}>
                                {firstName}
                            </span>

                            <Input
                                inputType="text"
                                inputId="first-name"
                                inputPlaceHolder={firstNamePlaceholder}
                                onFocus={this.setSelected}
                                onBlur={this.setNotSelected}
                            />
                        </label>
                        <label
                            htmlFor="last-name"
                            className={s.field}
                        >
                            <span className={s.label}>
                                {lastName}
                            </span>

                            <Input
                                inputType="text"
                                inputId="last-name"
                                inputPlaceHolder={lastNamePlaceholder}
                                onFocus={this.setSelected}
                                onBlur={this.setNotSelected}
                            />
                        </label>
                    </div>
                    <div>
                        <label
                            htmlFor="email"
                            className={s.field}
                        >
                            <span className={s.label}>
                                {email}
                            </span>

                            <Input
                                inputType="text"
                                inputId="email"
                                inputPlaceHolder={emailPlaceholder}
                                onFocus={this.setSelected}
                                onBlur={this.setNotSelected}
                            />
                        </label>
                        <label
                            htmlFor="phone"
                            className={s.field}
                        >
                            <span className={s.label}>
                                {phone}
                            </span>

                            <PhoneInput
                                onFocus={this.setSelected}
                                onBlur={this.setNotSelected}
                            />
                        </label>
                        <label
                            htmlFor="postCode"
                            className={s.field}
                        >
                            <span className={s.label}>
                                {postCode}
                            </span>

                            <div className={s.postCode}>
                                <Input
                                    type="text"
                                    inputId="postCode"
                                    inputPlaceHolder={postCodePlaceholder}
                                    onFocus={this.setSelected}
                                    onBlur={this.setNotSelected}
                                />
                            </div>

                            <span>{notMandatory}</span>
                        </label>
                    </div>
                </div>
            </Card>
        );
    }
}

ContactForm.propTypes = {
    texts: ContactFormTextsType.isRequired,
};

export default ContactForm;
