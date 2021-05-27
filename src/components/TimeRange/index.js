import React from 'react';
import PropTypes from 'prop-types';
import s from './TimeRange.module.css';
import { ScrollArrow } from '..';
import { arbitraryUnsetMinutesValue } from '../DateTimePicker';
import TimeElement from './TimeElement';

const getRange = (start, end, interval = 1) =>
  Array.from(Array(end).keys())
    .slice(start)
    .filter(nbr => nbr % interval === 0);

class TimeRange extends React.PureComponent {
  static getScrollTop(containerRef) {
    const { current: container } = containerRef;

    if (container && container.scrollTop) {
      return container.scrollTop;
    }
    return 0;
  }

  static scrollTo(containerRef, scroll) {
    const { current: container } = containerRef;

    if (container && container.scrollTo) {
      container.scrollTo(scroll);
    }
  }

  constructor(props) {
    super(props);
    const { startHour, endHour, minutesInterval, startMinute } = props;

    const visibleArrows = {
      [TimeRange.topMinutesArrow]: false,
      [TimeRange.topHoursArrow]: false,
      [TimeRange.bottomHoursArrow]: true,
      [TimeRange.bottomMinutesArrow]: true,
    };
    this.state = {
      hours: getRange(startHour, endHour),
      minutes: getRange(
        startMinute,
        TimeRange.defaultProps.endMinute,
        minutesInterval
      ),
      visibleArrows,
    };
    this.minutesContainer = React.createRef();
    this.hoursContainer = React.createRef();
    this.getHoursScrollTop = TimeRange.getScrollTop.bind(
      this,
      this.hoursContainer
    );
    this.getMinutesScrollTop = TimeRange.getScrollTop.bind(
      this,
      this.minutesContainer
    );
    this.hoursScrollTo = TimeRange.scrollTo.bind(this, this.hoursContainer);
    this.minutesScrollTo = TimeRange.scrollTo.bind(this, this.minutesContainer);
    this.showTopMinutesArrow = this.setArrowVisibility.bind(
      this,
      TimeRange.topMinutesArrow,
      true
    );
    this.hideTopMinutesArrow = this.setArrowVisibility.bind(
      this,
      TimeRange.topMinutesArrow,
      false
    );
    this.showTopHoursArrow = this.setArrowVisibility.bind(
      this,
      TimeRange.topHoursArrow,
      true
    );
    this.hideTopHoursArrow = this.setArrowVisibility.bind(
      this,
      TimeRange.topHoursArrow,
      false
    );
    this.showBottomMinutesArrow = this.setArrowVisibility.bind(
      this,
      TimeRange.bottomMinutesArrow,
      true
    );
    this.hideBottomMinutesArrow = this.setArrowVisibility.bind(
      this,
      TimeRange.bottomMinutesArrow,
      false
    );
    this.showBottomHoursArrow = this.setArrowVisibility.bind(
      this,
      TimeRange.bottomHoursArrow,
      true
    );
    this.hideBottomHoursArrow = this.setArrowVisibility.bind(
      this,
      TimeRange.bottomHoursArrow,
      false
    );
    this.handleMinutesScroll = this.handleScroll.bind(
      this,
      this.minutesContainer,
      TimeRange.topMinutesArrow,
      TimeRange.bottomMinutesArrow
    );
    this.handleHoursScroll = this.handleScroll.bind(
      this,
      this.hoursContainer,
      TimeRange.topHoursArrow,
      TimeRange.bottomHoursArrow
    );
    this.getMinutesContainerBottomScrollLimit =
      ScrollArrow.getContainerBottomScrollLimit.bind(
        this,
        this.minutesContainer
      );
    this.getHoursContainerBottomScrollLimit =
      ScrollArrow.getContainerBottomScrollLimit.bind(this, this.hoursContainer);
  }

  static getDerivedStateFromProps(props) {
    const {
      startMinute,
      endMinute,
      minutesInterval,
      startHour,
      endHour,
      hour,
    } = props;

    return {
      hours: getRange(startHour, endHour),
      minutes:
        +hour === +endHour - 1 &&
        +endMinute !== +TimeRange.defaultProps.endMinute - 1
          ? getRange(startMinute, endMinute + minutesInterval, minutesInterval)
          : getRange(
              startMinute,
              TimeRange.defaultProps.endMinute,
              minutesInterval
            ),
    };
  }

  setArrowVisibility(arrow, visible) {
    this.setState(prevState => ({
      visibleArrows: {
        ...prevState.visibleArrows,
        [arrow]: visible,
      },
    }));
  }

  handleHourSelect = event => {
    const { onSelect } = this.props;

    onSelect(TimeRange.hour, event.currentTarget.innerHTML);
  };

  handleMinutesSelect = event => {
    const { onSelect } = this.props;

    onSelect(TimeRange.minutes, event.currentTarget.innerHTML);
  };

  renderHour = hour => {
    const { hour: selectedHour } = this.props;
    const isSelected = +selectedHour === +hour;

    return (
      <TimeElement
        key={`h-${hour}`}
        className={s.hour}
        value={hour}
        selected={isSelected}
        disabled={
          !isSelected &&
          typeof selectedHour !== 'undefined' &&
          selectedHour !== '00'
        }
        onSelect={this.handleHourSelect}
      />
    );
  };

  renderMinutes = minutes => {
    const { minutes: selectedMinutes } = this.props;
    const isSelected = +minutes === +selectedMinutes;

    return (
      <TimeElement
        key={`m-${minutes}`}
        className={s.minute}
        value={minutes}
        selected={isSelected}
        disabled={
          !isSelected &&
          typeof selectedMinutes !== 'undefined' &&
          selectedMinutes !== arbitraryUnsetMinutesValue
        }
        onSelect={this.handleMinutesSelect}
      />
    );
  };

  getHoursContainerStyle = () => {
    const { visibleArrows } = this.state;

    return {
      paddingTop: '20px',
      paddingBottom: '20px',
      marginTop: visibleArrows[TimeRange.topHoursArrow] ? '20px' : '0',
      marginBottom: visibleArrows[TimeRange.bottomHoursArrow] ? '20px' : '0',
    };
  };

  getMinutesContainerStyle = () => {
    const { visibleArrows } = this.state;

    return {
      paddingTop: '20px',
      paddingBottom: '20px',
      marginTop: visibleArrows[TimeRange.topMinutesArrow] ? '20px' : '0',
      marginBottom: visibleArrows[TimeRange.bottomMinutesArrow] ? '20px' : '0',
    };
  };

  handleScroll(containerRef, topArrow, bottomArrow) {
    const { current: container } = containerRef;
    const { visibleArrows } = this.state;

    if (container.scrollTop <= 0) {
      visibleArrows[topArrow] = false;
    } else if (
      container.scrollTop >=
      ScrollArrow.getContainerBottomScrollLimit(containerRef)
    ) {
      visibleArrows[bottomArrow] = false;
    } else if (!visibleArrows[topArrow] || !visibleArrows[bottomArrow]) {
      visibleArrows[topArrow] = true;
      visibleArrows[bottomArrow] = true;
    } else {
      return;
    }
    this.setState({ visibleArrows });
  }

  render() {
    const { style, ArrowIcon } = this.props;
    const { minutes, hours, visibleArrows } = this.state;

    return (
      <div className={s.container} style={style}>
        <ScrollArrow
          visible={visibleArrows[TimeRange.topHoursArrow]}
          direction={ScrollArrow.up}
          className={[s.arrow, s.left, s.top].join(' ')}
          getScrollTop={this.getHoursScrollTop}
          getBottomScrollLimit={this.getHoursContainerBottomScrollLimit}
          scrollTo={this.hoursScrollTo}
          onHide={this.hideTopHoursArrow}
          onShow={this.showTopHoursArrow}
          Icon={ArrowIcon}
        />
        <div
          className={s.hours}
          style={this.getHoursContainerStyle()}
          ref={this.hoursContainer}
          onScroll={this.handleHoursScroll}
        >
          {hours.map(this.renderHour)}
        </div>
        <ScrollArrow
          visible={visibleArrows[TimeRange.bottomHoursArrow]}
          direction={ScrollArrow.down}
          className={[s.arrow, s.left, s.bottom].join(' ')}
          getScrollTop={this.getHoursScrollTop}
          getBottomScrollLimit={this.getHoursContainerBottomScrollLimit}
          scrollTo={this.hoursScrollTo}
          onHide={this.hideBottomHoursArrow}
          onShow={this.showBottomHoursArrow}
          Icon={ArrowIcon}
        />
        <ScrollArrow
          visible={visibleArrows[TimeRange.topMinutesArrow]}
          direction={ScrollArrow.up}
          className={[s.arrow, s.right, s.top].join(' ')}
          getScrollTop={this.getMinutesScrollTop}
          getBottomScrollLimit={this.getMinutesContainerBottomScrollLimit}
          scrollTo={this.minutesScrollTo}
          onHide={this.hideTopMinutesArrow}
          onShow={this.showTopMinutesArrow}
          Icon={ArrowIcon}
        />
        <div
          onScroll={this.handleMinutesScroll}
          className={s.minutes}
          style={this.getMinutesContainerStyle()}
          ref={this.minutesContainer}
        >
          {minutes.map(this.renderMinutes)}
        </div>
        <ScrollArrow
          visible={visibleArrows[TimeRange.bottomMinutesArrow]}
          direction={ScrollArrow.down}
          className={[s.arrow, s.right, s.bottom].join(' ')}
          getScrollTop={this.getMinutesScrollTop}
          getBottomScrollLimit={this.getMinutesContainerBottomScrollLimit}
          scrollTo={this.minutesScrollTo}
          onHide={this.hideBottomMinutesArrow}
          onShow={this.showBottomMinutesArrow}
          Icon={ArrowIcon}
        />
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

TimeRange.defaultProps = {
  startHour: 7,
  endHour: 24,
  minutesInterval: 1,
  onSelect: () => null,
  ArrowIcon: () => null,
  hour: undefined,
  minutes: undefined,
  startMinute: 0,
  endMinute: 60,
  style: undefined,
};

TimeRange.propTypes = {
  startHour: PropTypes.number,
  endHour: PropTypes.number,
  minutesInterval: PropTypes.number,
  onSelect: PropTypes.func,
  ArrowIcon: PropTypes.func,
  minutes: PropTypes.string,
  hour: PropTypes.string,
  startMinute: PropTypes.number,
  endMinute: PropTypes.number, // eslint-disable-line
  style: PropTypes.shape(),
};

export default TimeRange;
export { TimeNumber } from './TimeElement';
