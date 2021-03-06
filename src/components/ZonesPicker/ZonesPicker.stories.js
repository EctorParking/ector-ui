import React from 'react';
import PropTypes from 'prop-types';
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered';
import { withKnobs, text } from '@storybook/addon-knobs';
import ZonesPicker from '.';
import Suggestions from './Zones.json';

class ZonePickerStory extends React.PureComponent {
  state = {
    fromZone: null,
    toZone: null,
    fromZoneSuggestions: Suggestions,
    toZoneSuggestions: Suggestions,
  };

  handleZoneSelect = (zone, zoneType) => {
    if (zoneType === ZonesPicker.fromZone) {
      this.setState({
        fromZone: zone,
        toZoneSuggestions: zone
          ? Suggestions.filter(suggestion =>
              zone.name ? suggestion.name.includes(zone.name) : true
            )
          : Suggestions,
      });
    } else {
      this.setState({
        toZone: zone,
      });
    }
  };

  render() {
    const { fromZone, toZone, fromZoneSuggestions, toZoneSuggestions } =
      this.state;
    const { error } = this.props;

    return (
      <ZonesPicker
        onSelect={this.handleZoneSelect}
        fromZone={fromZone}
        toZone={toZone}
        fromZoneSuggestions={fromZoneSuggestions}
        toZoneSuggestions={toZoneSuggestions}
        error={error}
      />
    );
  }
}

ZonePickerStory.propTypes = {
  error: PropTypes.string,
};

ZonePickerStory.defaultProps = {
  error: '',
};

storiesOf('ZonesPicker', module)
  .addParameters({
    backgrounds: [{ name: 'header', value: 'white', default: true }],
  })
  .addDecorator(centered)
  .addDecorator(withKnobs)

  .add('with knobs', () => {
    const props = {
      error: text('Error', ''),
    };

    return <ZonePickerStory {...props} />;
  });
