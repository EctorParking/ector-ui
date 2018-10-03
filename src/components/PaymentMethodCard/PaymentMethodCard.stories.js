import React from 'react';
import { storiesOf } from '@storybook/react';
import backgrounds from '@storybook/addon-backgrounds';
import centered from '@storybook/addon-centered';
import { withKnobs, object, boolean } from '@storybook/addon-knobs/react';

import PaymentMethodCard from '.';
import { DefaultTexts } from './PaymentmethodTextsType';

storiesOf('PaymentMethodCard', module)
  .addDecorator(backgrounds([
    { name: 'header', value: 'white', default: true },
  ]))
  .addDecorator(centered)
  .addDecorator(withKnobs)

  .add('With knobs', () => {
    const props = {
      paymentMethod: object('PaymentMethod', {
        last4digits: '4242',
        brand: 'visa',
        type: 'card',
        expireAt: '10/19',
      }),
      texts: object('Texts', DefaultTexts),
      selected: boolean('Selected', false),
      deletable: boolean('Deletable', true),
      pendingDeletion: boolean('Pending deletion', false),
    };

    return (
      <PaymentMethodCard {...props} FooterComponent={() => null} />
    );
  });
