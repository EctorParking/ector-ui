import React from 'react';
import PropTypes from 'prop-types';
import s from './TimeRange.module.css';
import TimeElement from './TimeElement';

const getHoursRange = (start, end) => Array.from(Array(end).keys()).slice(start);

const getMinutesRange = interval => Array
  .from(Array(60).keys())
  .filter(nbr => nbr % interval === 0);

class TimeRange extends React.PureComponent {
  constructor(props) {
    super(props);
    const { startHour, endHour, minutesInterval } = props;

    this.minutesContainer = React.createRef();
    this.hoursContainer = React.createRef();
    this.minutesRange = getMinutesRange(minutesInterval);
    this.hoursRange = getHoursRange(startHour, endHour);
  }

  componentDidUpdate(prevProps) {
    const { hour: prevHour, minutes: prevMinutes } = prevProps;
    const { hour: currentHour, minutes: currentMinutes } = this.props;

    if (prevHour !== currentHour) {
      this.focusSelectedHour();
    }
    if (prevMinutes !== currentMinutes) {
      this.focusSelectedMinutes();
    }
  }

  handleHourSelect = (event) => {
    const { onSelect } = this.props;

    onSelect(TimeRange.hour, event.currentTarget.innerHTML);
  };

  handleMinutesSelect = (event) => {
    const { onSelect } = this.props;

    onSelect(TimeRange.minutes, event.currentTarget.innerHTML);
  };

  focusSelectedHour = () => {
    // eslint-disable-next-line
    for(const child of this.hoursContainer.current.children) {
      const isSelected = child.getAttribute('aria-selected');
      if (isSelected) {
        break;
      }
    }
  };

  focusSelectedMinutes = () => {
    // eslint-disable-next-line
    for(const child of this.minutesContainer.current.children) {
      const isSelected = child.getAttribute('aria-selected');
      if (isSelected) {
        break;
      }
    }
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
        <div className={s.hours} ref={this.hoursContainer}>
          {this.hoursRange.map(this.renderHour)}
        </div>
        <div className={s.minutes} ref={this.minutesContainer}>
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
};

TimeRange.propTypes = {
  startHour: PropTypes.number,
  endHour: PropTypes.number,
  minutesInterval: PropTypes.number,
  onSelect: PropTypes.func,
  minutes: PropTypes.string,
  hour: PropTypes.string,
};

export default TimeRange;
