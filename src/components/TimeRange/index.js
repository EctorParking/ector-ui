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

    const visibleArrows = {
      [TimeRange.topMinutesArrow]: false,
      [TimeRange.topHoursArrow]: false,
      [TimeRange.bottomHoursArrow]: true,
      [TimeRange.bottomMinutesArrow]: true,
    };
    this.state = {
      hours: getRange(startHour, endHour),
      minutes: getRange(startMinute, endMinute, minutesInterval),
      visibleArrows,
    };
    this.minutesContainer = React.createRef();
    this.hoursContainer = React.createRef();
    this.scrollInterval = null;
    this.handleHoursScrollTop = this.handleScrollHover.bind(this, this.hoursContainer, -TimeRange.scrollOffset, TimeRange.topHoursArrow);
    this.handleHoursScrollBottom = this.handleScrollHover.bind(this, this.hoursContainer, TimeRange.scrollOffset, TimeRange.bottomHoursArrow);
    this.handleMinutesScrollTop = this.handleScrollHover.bind(this, this.minutesContainer, -TimeRange.scrollOffset, TimeRange.topMinutesArrow);
    this.handleMinutesScrollBottom = this.handleScrollHover.bind(this, this.minutesContainer, TimeRange.scrollOffset, TimeRange.bottomMinutesArrow);
    this.handleMinutesScroll = this.handleScroll.bind(this, this.minutesContainer, TimeRange.topMinutesArrow, TimeRange.bottomMinutesArrow);
    this.handleHoursScroll = this.handleScroll.bind(this, this.hoursContainer, TimeRange.topHoursArrow, TimeRange.bottomHoursArrow);
  }

  static getDerivedStateFromProps(props) {
    const {
      startMinute, endMinute, minutesInterval, startHour, endHour,
    } = props;

    return {
      hours: getRange(startHour, endHour),
      minutes: getRange(startMinute, endMinute, minutesInterval),
    };
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

  handleMouseLeave = () => {
    if (this.scrollInterval) {
      clearInterval(this.scrollInterval);
      this.scrollInterval = null;
    }
  };

  getHoursContainerStyle = () => {
    const { visibleArrows } = this.state;

    return {
      marginTop: visibleArrows[TimeRange.topHoursArrow] ? '20px' : '0',
      marginBottom: visibleArrows[TimeRange.bottomHoursArrow] ? '20px' : '0',
    };
  };

  getMinutesContainerStyle = () => {
    const { visibleArrows } = this.state;

    return {
      marginTop: visibleArrows[TimeRange.topMinutesArrow] ? '20px' : '0',
      marginBottom: visibleArrows[TimeRange.bottomMinutesArrow] ? '20px' : '0',
    };
  };

  handleScrollHover(containerRef, interval, arrow) {
    this.scrollInterval = setInterval(() => {
      const { current: container } = containerRef;
      if (
        container.scrollTop + interval > 0
        && container.scrollTop + interval < container.scrollHeight
      ) {
        container.scrollTo({
          top: container.scrollTop + interval,
          behavior: 'smooth',
        });
      } else {
        this.resetScroll(containerRef, arrow);
        clearInterval(this.scrollInterval);
      }
    },
    !this.scrollInterval ? 0 : 42);
  }

  handleScroll(containerRef, topArrow, bottomArrow) {
    const { current: container } = containerRef;
    const { visibleArrows } = this.state;

    console.log('container::', container.scrollHeight);
    console.dir(container);
    if (container.scrollTop < 10) {
      visibleArrows[topArrow] = false;
    } else if (container.scrollTop > container.scrollHeight - 10) {
      visibleArrows[bottomArrow] = false;
    } else if (
      !visibleArrows[topArrow] || !visibleArrows[bottomArrow]
    ) {
      visibleArrows[topArrow] = true;
      visibleArrows[bottomArrow] = true;
    } else {
      return;
    }
    this.setState({ visibleArrows });
  }

  resetScroll(containerRef, arrow) {
    const { current: container } = containerRef;
    let scrollValue = { top: 0 };

    if ([TimeRange.bottomMinutesArrow, TimeRange.bottomHoursArrow].includes(arrow)) {
      scrollValue = { bottom: 0 };
    }
    container.scrollTo({
      ...scrollValue,
      behavior: 'smooth',
    });
  }

  render() {
    const { height } = this.props;
    const { minutes, hours, visibleArrows } = this.state;

    return (
      <div className={s.container} style={{ height: `${height}px` }}>
        <div
          style={{
            height: visibleArrows[TimeRange.topHoursArrow] ? TimeRange.arrowHeight : 0,
          }}
          className={[s.arrow, s.left, s.top].join(' ')}
          onMouseLeave={this.handleMouseLeave}
          onMouseEnter={this.handleHoursScrollTop}
        >
          {visibleArrows[TimeRange.topHoursArrow] && '|'}
        </div>
        <div
          className={s.hours}
          style={this.getHoursContainerStyle()}
          ref={this.hoursContainer}
          onScroll={this.handleHoursScroll}
        >
          {hours.map(this.renderHour)}
        </div>
        <div
          style={{
            height: visibleArrows[TimeRange.bottomHoursArrow] ? TimeRange.arrowHeight : 0,
          }}
          className={[s.arrow, s.left, s.bottom].join(' ')}
          onMouseLeave={this.handleMouseLeave}
          onMouseEnter={this.handleHoursScrollBottom}
        >
          {visibleArrows[TimeRange.bottomHoursArrow] && '|'}
        </div>
        <div
          style={{
            height: visibleArrows[TimeRange.topMinutesArrow] ? TimeRange.arrowHeight : 0,
          }}
          className={[s.arrow, s.right, s.top].join(' ')}
          onMouseLeave={this.handleMouseLeave}
          onMouseEnter={this.handleMinutesScrollTop}
        >
          {visibleArrows[TimeRange.topMinutesArrow] && '|'}
        </div>

        <div
          onScroll={this.handleMinutesScroll}
          className={s.minutes}
          style={this.getMinutesContainerStyle()}
          ref={this.minutesContainer}
        >
          {minutes.map(this.renderMinutes)}
        </div>
        <div
          style={{
            height: visibleArrows[TimeRange.bottomMinutesArrow] ? TimeRange.arrowHeight : 0,
          }}
          className={[s.arrow, s.right, s.bottom].join(' ')}
          onMouseLeave={this.handleMouseLeave}
          onMouseEnter={this.handleMinutesScrollBottom}
        >
          {visibleArrows[TimeRange.bottomMinutesArrow] && '|'}
        </div>
      </div>
    );
  }
}

TimeRange.minutes = 'minutes';
TimeRange.hour = 'hour';
TimeRange.topHoursArrow = 'topHoursArrow';
TimeRange.bottomHoursArrow = 'bottomHoursArrow';
TimeRange.topMinutesArrow = 'topMinutesArrow';
TimeRange.bottomMinutesArrow = 'bottomMinutesArrow';
TimeRange.arrowHeight = '20px';
TimeRange.scrollOffset = 5;

TimeRange.defaultProps = {
  startHour: 7,
  endHour: 24,
  minutesInterval: 1,
  onSelect: () => null,
  hour: undefined,
  minutes: undefined,
  startMinute: 0,
  endMinute: 60,
  height: 200,
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
  height: PropTypes.number,
};

export default TimeRange;
export { TimeNumber } from './TimeElement';
