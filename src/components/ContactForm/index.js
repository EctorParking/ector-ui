import React from 'react';
import PropTypes from 'prop-types';
import s from './ContactForm.css';
import ContactFormTextsType, { defaultTexts } from './ContactFormTextsType';
import Card from '../Card';
import Input from '../Input';
import GenderPicker from '../GenderPicker';
import PhoneInput from '../PhoneInput';
import LinkUnderlined from '../LinkUnderlined';
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
    const { texts, className } = this.props;
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
        className={className}
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
                type="text"
                id="first-name"
                placeholder={firstNamePlaceholder}
                onFocus={this.setSelected}
                onBlur={this.setNotSelected}
              />
            </ContactFormField>
            <ContactFormField
              label={lastName}
              mandatory
            >
              <Input
                type="text"
                id="last-name"
                placeholder={lastNamePlaceholder}
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
                type="text"
                id="email"
                placeholder={emailPlaceholder}
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
                  id="postCode"
                  placeholder={postCodePlaceholder}
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

ContactForm.defaultProps = {
  className: '',
  texts: defaultTexts,
};

ContactForm.propTypes = {
  texts: ContactFormTextsType,
  className: PropTypes.string,
};

export default ContactForm;
