import React from 'react';
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered';
import ZonesPicker from '.';
import Suggestions from './ZonesPickerSuggestions';

class ZonePickerStory extends React.PureComponent {
  state = {
    fromZone: {},
    toZone: {},
    fromZoneSuggestions: Suggestions,
    toZoneSuggestions: Suggestions,
  };

  handleZoneSelect = (zone, zoneType) => {
    if (zoneType === ZonesPicker.fromZone) {
      this.setState({
        fromZone: zone,
        toZoneSuggestions: Suggestions.filter(suggestion => (
          zone.name ? suggestion.name.includes(zone.name) : true
        )),
      });
    } else {
      this.setState({
        toZone: zone,
      });
    }
  };

  render() {
    const {
      fromZone, toZone, fromZoneSuggestions, toZoneSuggestions,
    } = this.state;

    return (
      <ZonesPicker
        onSelect={this.handleZoneSelect}
        fromZone={fromZone}
        toZone={toZone}
        fromZoneSuggestions={fromZoneSuggestions}
        toZoneSuggestions={toZoneSuggestions}
      />
    );
  }
}

storiesOf('ZonesPicker', module)

  .addParameters({
    backgrounds: [
      { name: 'header', value: 'white', default: true },
    ],
  })
  .addDecorator(centered)

  .add('Basic', () => <ZonePickerStory />);
