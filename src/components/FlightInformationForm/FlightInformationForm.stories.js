import React from 'react';
import { storiesOf } from '@storybook/react';

import centered from '@storybook/addon-centered';
import { withKnobs, text, select, boolean } from '@storybook/addon-knobs';

import FlightInformationForm from '.';

storiesOf('FlightInformationForm', module)
  .addParameters({
    backgrounds: [{ name: 'header', value: 'white', default: true }],
  })
  .addDecorator(centered)
  .addDecorator(withKnobs)

  .add('with knobs', () => {
    const spotOptions = {
      default: null,
      CDG: {
        shortName: 'T1',
        code: 'CDG1',
        type: 'airport',
      },
      GDL: {
        shortName: 'de Lyon',
        code: 'GDL',
        type: 'station',
      },
    };
    const spotsOptions = {
      plusieursSpots: [
        {
          shortName: 'T1',
          code: 'CDG1',
        },
        {
          shortName: 'T2A',
          code: 'CDG2A',
        },
        {
          shortName: 'T2B',
          code: 'CDG2B',
        },
      ],
      unSpot: [
        {
          shortName: 'T2B',
          code: 'CDG2B',
        },
      ],
    };
    const props = {
      fromSpotsAvailable: select(
        'Zone de départ',
        spotsOptions,
        spotsOptions.plusieursSpots
      ),
      toSpotsAvailable: select(
        "Zone d'arrivée",
        spotsOptions,
        spotsOptions.plusieursSpots
      ),
      values: {
        fromSpot: select('Terminal aller', spotOptions, spotOptions.default),
        toSpot: select('Terminal retout', spotOptions, spotOptions.default),
        travelingNumberTo: text('N° de vol retour', ''),
        returnFlightCompany: text('Compagnie aérienne', ''),
        returnFlightOrigin: text('Ville de provenance', ''),
      },
      airlines: [
        { value: 'AF', label: 'Air France' },
        { value: 'U2', label: 'EasyJet' },
        { value: '3B', label: 'Job Air' },
      ],
      shouldDisplayReturnFlightInformation: boolean(
        'Voir champs additionnels',
        false
      ),
      toSpotType: select('Type du retour', ['station', 'airport'], 'airport'),
      errors: {},
    };

    return (
      <FlightInformationForm
        onChange={(field, value) => console.log(field, value)}
        {...props}
      />
    );
  });
