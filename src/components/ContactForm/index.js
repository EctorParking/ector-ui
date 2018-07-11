import React from 'react';
import s from './ContactForm.css';
import ContactFormTextsType from './ContactFormTextsType';
import Card from '../card';
import Input from '../input';
import GenderPicker from '../GenderPicker';
import PhoneInput from '../PhoneInput';
import LinkUnderlined from '../link-underlined';
import ContactFormField from './ContactFormField';

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
                        <ContactFormField label={civility}>
                            <GenderPicker
                                genders={genders}
                            />
                        </ContactFormField>
                        <ContactFormField
                            label={firstName}
                            mandatory
                        >
                            <Input
                                inputType="text"
                                inputId="first-name"
                                inputPlaceHolder={firstNamePlaceholder}
                                onFocus={this.setSelected}
                                onBlur={this.setNotSelected}
                            />
                        </ContactFormField>
                        <ContactFormField
                            label={lastName}
                            mandatory
                        >
                            <Input
                                inputType="text"
                                inputId="last-name"
                                inputPlaceHolder={lastNamePlaceholder}
                                onFocus={this.setSelected}
                                onBlur={this.setNotSelected}
                            />
                        </ContactFormField>
                    </div>
                    <div>
                        <ContactFormField
                            label={email}
                            mandatory
                        >
                            <Input
                                inputType="text"
                                inputId="email"
                                inputPlaceHolder={emailPlaceholder}
                                onFocus={this.setSelected}
                                onBlur={this.setNotSelected}
                            />
                        </ContactFormField>
                        <ContactFormField
                            label={phone}
                            mandatory
                        >
                            <PhoneInput
                                onFocus={this.setSelected}
                                onBlur={this.setNotSelected}
                            />
                        </ContactFormField>
                        <ContactFormField
                            label={postCode}
                        >
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
                        </ContactFormField>
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
