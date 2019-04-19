import React from 'react';
import PropTypes from 'prop-types';
import s from './TimeRange.module.css';
import TimeElement from './TimeElement';

const getRange = (start, end, interval = 1) => (
  Array.from(Array(end).keys()).slice(start).filter(nbr => nbr % interval === 0)
);

class TimeRange extends React.PureComponent {
  constructor(props) {
    super(props);
    const {
      startHour, endHour, minutesInterval, startMinute, endMinute,
    } = props;

    this.minutesRange = getRange(startMinute, endMinute, minutesInterval);
    this.hoursRange = getRange(startHour, endHour);
  }

  handleHourSelect = (event) => {
    const { onSelect } = this.props;

    onSelect(TimeRange.hour, event.currentTarget.innerHTML);
  };

  handleMinutesSelect = (event) => {
    const { onSelect } = this.props;

    onSelect(TimeRange.minutes, event.currentTarget.innerHTML);
  };

  renderHour = (hour) => {
    const { hour: selectedHour } = this.props;
    const isSelected = +selectedHour === +hour;

    return (
      <TimeElement
        key={`h-${hour}`}
        className={s.hour}
        value={hour}
        selected={isSelected}
        disabled={!isSelected && typeof selectedHour !== 'undefined'}
        onSelect={this.handleHourSelect}
      />
    );
  };

  renderMinutes = (minutes) => {
    const { minutes: selectedMinutes } = this.props;
    const isSelected = +minutes === +selectedMinutes;

    return (
      <TimeElement
        key={`m-${minutes}`}
        className={s.minute}
        value={minutes}
        selected={isSelected}
        disabled={!isSelected && typeof selectedMinutes !== 'undefined'}
        onSelect={this.handleMinutesSelect}
      />
    );
  };

  render() {
    return (
      <div className={s.container}>
        <div className={s.hours}>
          {this.hoursRange.map(this.renderHour)}
        </div>
        <div className={s.minutes}>
          {this.minutesRange.map(this.renderMinutes)}
        </div>
      </div>
    );
  }
}

TimeRange.minutes = 'minutes';
TimeRange.hour = 'hour';

TimeRange.defaultProps = {
  startHour: 7,
  endHour: 24,
  minutesInterval: 1,
  onSelect: () => null,
  hour: undefined,
  minutes: undefined,
  startMinute: 0,
  endMinute: 60,
};

TimeRange.propTypes = {
  startHour: PropTypes.number,
  endHour: PropTypes.number,
  minutesInterval: PropTypes.number,
  onSelect: PropTypes.func,
  minutes: PropTypes.string,
  hour: PropTypes.string,
  startMinute: PropTypes.number,
  endMinute: PropTypes.number,
};

export default TimeRange;
export { TimeNumber } from './TimeElement';
