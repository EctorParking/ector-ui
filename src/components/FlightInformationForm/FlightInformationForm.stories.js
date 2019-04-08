import React from 'react';
import { storiesOf } from '@storybook/react';

import centered from '@storybook/addon-centered';
import { withKnobs, object, text, select } from '@storybook/addon-knobs';

import FlightInformationForm from '.';

storiesOf('FlightInformationForm', module)

  .addParameters({
    backgrounds: [
      { name: 'header', value: 'white', default: true },
    ],
  })
  .addDecorator(centered)
  .addDecorator(withKnobs)

  .add('with knobs', () => {
    const spotOptions = {
      default: null,
      CDG: {
        shortName: 'T1',
        code: 'CDG1',
      },
    };
    const zoneOptions = {
      orlySeveralZones: {
        name: 'Paris Orly',
        code: 'ORY',
        type: 'airport',
        spots: [{
          shortName: 'T1',
          code: 'CDG1',
        }, {
          shortName: 'T2A',
          code: 'CDG2A',
        }, {
          shortName: 'T2B',
          code: 'CDG2B',
        }],
      },
      orlyOneZones: {
        name: 'Paris Orly',
        code: 'ORY',
        type: 'airport',
        spots: [{
          shortName: 'T2B',
          code: 'CDG2B',
        }],
      },
    };
    const props = {
      fromZone: select('Zone de départ', zoneOptions, zoneOptions.orlySeveralZones),
      toZone: select("Zone d'arrivée", zoneOptions, zoneOptions.orlySeveralZones),
      fromSpot: select('Terminal aller', spotOptions, spotOptions.default),
      toSpot: select('Terminal retout', spotOptions, spotOptions.default),
      travelingNumberTo: text('N° de vol retour', ''),
      returnFlightCompany: text('Compagnie aérienne', ''),
      returnFlightOrigin: text('Ville de provenance', ''),
    };

    return <FlightInformationForm {...props} />;
  });
