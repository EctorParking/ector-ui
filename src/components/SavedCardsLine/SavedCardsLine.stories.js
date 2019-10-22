import React from 'react';
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered';
import {
  withKnobs, text, object,
} from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import PaymentMethodLine from '.';

storiesOf('PaymentMethodLine', module)

  .addParameters({
    backgrounds: [
      { name: 'header', value: 'white', default: true },
    ],
  })
  .addDecorator(centered)
  .addDecorator(withKnobs)

  .add('with knobs', () => {
    const props = {
      card: text('1b55910f-ee78-11e9-9ff6-0242ac120002'),
      paymentMethod: object('PaymentMethod', {
        last4digits: '4242',
        brand: 'visa',
        type: 'card',
        expireAt: '10/19',
      }),
      name: text('paymentMethod'),
      label: text(' '),
      onSelect: action('Selected option 1'),
      src: 'icon-visa',
      alt: 'icon-cb-alt',
      brandText: 'visa',
      onClick: action('clicked'),
    };

    return <PaymentMethodLine {...props} />;
  });
