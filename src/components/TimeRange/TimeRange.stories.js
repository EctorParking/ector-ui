import React from 'react';
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered';
import { withKnobs, text, number } from '@storybook/addon-knobs';
import TimeRange from '.';

class TimeRangeStory extends React.Component {
  state = {
    selectedMinute: 0,
    selectedHour: 0,
  };

  onSelect = (timeUnits, value) => {
    const timeUnitsToState = {
      [TimeRange.hour]: 'selectedHour',
      [TimeRange.minutes]: 'selectedMinute',
    };

    this.setState({ [timeUnitsToState[timeUnits]]: value });
  };

  render() {
    const { selectedHour, selectedMinute } = this.state;

    return (
      <TimeRange
        {...this.props}
        onSelect={this.onSelect}
        minutes={selectedMinute}
        hour={selectedHour}
      />
    );
  }
}


storiesOf('TimeRange', module)

  .addParameters({
    backgrounds: [
      { name: 'header', value: 'white', default: true },
    ],
  })
  .addDecorator(centered)
  .addDecorator(withKnobs)
  .add('Default', () => {
    const props = {
      startHour: number('Start hour', 0),
      endHour: number('End hour', 24),
      minutesInterval: number('Minutes interval', 5),
      startMinute: number('Start minute', 0),
      endMinute: number('End minute', 60),
    };

    return (
      <TimeRangeStory {...props} />
    );
  });
