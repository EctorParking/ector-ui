import * as React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { DayPickerRangeController } from 'react-dates';
import {
  Picker, Input, PickerSuggestions, Arrow, Icon, TimeRange,
} from '..';
import s from './DateTimePicker.module.css';
import { DefaultTexts, TextsType } from './DateTimePickerTexts';
import TimeSuggestions from './TimeSuggestions';
import iconCalendar from '../../assets/images/calendar.svg';
import iconCalendarRed from '../../assets/images/calendar-red.svg';
import iconClock from '../../assets/images/clock.svg';
import iconClockRed from '../../assets/images/clock-red.svg';

let now;

const arbitraryUnsetMinutesValue = '22';

class DateTimePicker extends React.PureComponent {
  static startDate = 'startDate';

  static endDate = 'endDate';

  static timePicker = 'timePicker';

  static datePicker = 'datePicker';

  static parseTimeRange = (timeRange) => {
    if (!timeRange || !Array.isArray(timeRange) || timeRange.length !== 2) {
      return {};
    }

    let [fromTime, toTime] = timeRange;
    fromTime = moment(fromTime);
    toTime = moment(toTime);

    if (!fromTime.isValid() || !toTime.isValid()) {
      return {};
    }
    if (toTime.minutes() === 0) {
      return {
        minuteRange: [0, 60],
        hourRange: [fromTime.hours(), toTime.hours()],
      };
    }
    return {
      minuteRange: [0, toTime.minutes()],
      hourRange: [fromTime.hours(), toTime.hours() + 1],
    };
  };

  constructor() {
    super();

    this.ectorPicker = React.createRef();
    this.handleStartDateFocus = this.handleDateFocus.bind(this, DateTimePicker.startDate);
    this.handleEndDateFocus = this.handleDateFocus.bind(this, DateTimePicker.endDate);
    this.state = {
      startDate: undefined,
      endDate: undefined,
      startHour: undefined,
      startMinutes: undefined,
      endHour: undefined,
      endMinutes: undefined,
      fromMinuteRange: undefined,
      toMinuteRange: undefined,
      fromHourRange: undefined,
      toHourRange: undefined,
      focusedDateInput: DateTimePicker.startDate,
      visiblePicker: DateTimePicker.datePicker,
      showTimeInputs: false,
    };
    now = moment();
  }

  static getDerivedStateFromProps(props, state) {
    const {
      startDate: propStartDate,
      endDate: propEndDate,
      fromTimeRange,
      toTimeRange,
    } = props;
    let {
      startDate,
      endDate,
      startMinutes,
      endMinutes,
      startHour,
      endHour,
      showTimeInputs,
    } = state;

    if (propStartDate) {
      startDate = moment(propStartDate);
      startMinutes = startDate.format('mm');
      startHour = startDate.format('HH');
      showTimeInputs = true;
    }
    if (propEndDate) {
      endDate = moment(propEndDate);
      endMinutes = endDate.format('mm');
      endHour = endDate.format('HH');
      showTimeInputs = true;
    }
    const {
      hourRange: fromHourRange,
      minuteRange: fromMinuteRange,
    } = DateTimePicker.parseTimeRange(fromTimeRange);
    const {
      hourRange: toHourRange,
      minuteRange: toMinuteRange,
    } = DateTimePicker.parseTimeRange(toTimeRange);
    return {
      showTimeInputs,
      startDate,
      endDate,
      startMinutes,
      startHour,
      endMinutes,
      endHour,
      fromMinuteRange,
      fromHourRange,
      toMinuteRange,
      toHourRange,
    };
  }

  handleDateChange = ({ startDate, endDate: datePickerEndDate }) => {
    const { onStartDateChange, onEndDateChange } = this.props;
    const { endDate: stateEndDate, visiblePicker } = this.state;
    let endDate = datePickerEndDate;

    if (startDate && stateEndDate && stateEndDate.isBefore(startDate)) {
      endDate = undefined;
    }
    if (onStartDateChange) {
      onStartDateChange(startDate);
    }
    if (onEndDateChange) {
      onEndDateChange(endDate);
    }

    this.setState({
      startDate,
      endDate,
      focusedDateInput: startDate
        ? DateTimePicker.endDate
        : DateTimePicker.startDate,
      visiblePicker: visiblePicker === DateTimePicker.datePicker && endDate && startDate
        ? DateTimePicker.timePicker
        : visiblePicker,
      showTimeInputs: !!(stateEndDate || endDate),
    });
  };

  handleTimeSelect = (type, units, value) => {
    const { onStartTimeChange, onEndTimeChange } = this.props;
    const unitsToStateVariable = {
      [TimeRange.minutes]: type === TimeSuggestions.startTime ? 'startMinutes' : 'endMinutes',
      [TimeRange.hour]: type === TimeSuggestions.startTime ? 'startHour' : 'endHour',
    };

    this.setState({
      [unitsToStateVariable[units]]: value,
    });
    if (type === TimeSuggestions.startTime) {
      onStartTimeChange(units, value);
    } else {
      onEndTimeChange(units, value);
    }
  };

  isDayBlocked = day => day.startOf('day').isBefore(now.startOf('day'));

  isDayHighlighted = (day) => {
    const { startDate, endDate } = this.state;

    if (!startDate || !endDate) {
      return false;
    }
    return day.isBetween(startDate, endDate) && !day.isSame(startDate, 'day');
  };

  handleTimeFocus = () => {
    this.ectorPicker.current.handleFocus();
    this.setState({ visiblePicker: DateTimePicker.timePicker });
  };

  handleFocusChange = (focusedDateInput) => {
    this.setState({ focusedDateInput });
  };

  renderMonthElement = ({ month }) => <div className={s.month}>{month.format('MMMM YYYY')}</div>;

  renderDateInputLeftElement = ({ className, ...props }, error) => <Icon {...props} className={[s.inputIcon, className].join(' ')} src={error ? iconCalendarRed : iconCalendar} />;

  renderStartDateInputLeftElement = (props) => {
    const { hasStartDateError } = this.props;

    return this.renderDateInputLeftElement(props, hasStartDateError);
  };

  renderEndDateInputLeftElement = (props) => {
    const { hasEndDateError } = this.props;

    return this.renderDateInputLeftElement(props, hasEndDateError);
  };

  renderTimeInputLeftElement = ({ className, ...props }, error) => <Icon {...props} className={[s.inputIcon, className].join(' ')} src={error ? iconClockRed : iconClock} />;

  renderStartTimeInputLeftElement = (props) => {
    const { hasStartTimeError } = this.props;

    return this.renderTimeInputLeftElement(props, hasStartTimeError);
  };

  renderEndTimeInputLeftElement = (props) => {
    const { hasEndTimeError } = this.props;

    return this.renderTimeInputLeftElement(props, hasEndTimeError);
  };

  renderStartDateTimeInputComponent = ({ className: inputClassName, ...inputProps }) => {
    const {
      startDate, showTimeInputs, startMinutes, startHour,
    } = this.state;
    const { texts, hasStartDateError, hasStartTimeError } = this.props;

    let displayedTime = '';

    if (startHour && startHour !== '00') {
      displayedTime = `${startHour}h`;
    }
    if (startMinutes && startMinutes !== arbitraryUnsetMinutesValue) {
      displayedTime += startMinutes;
    }

    return (
      <div className={s.splitInputContainer}>
        <Input
          {...inputProps}
          onFocus={this.handleStartDateFocus}
          className={[s.datePickerInput, showTimeInputs ? s.fixedWidthDateInput : undefined, hasStartDateError ? s.inputError : undefined, inputClassName].join(' ')}
          containerClassName={s.inputContainer}
          value={startDate ? startDate.format('ddd DD/MM/YYYY') : ''}
          placeholder={texts.startPlaceholder}
          LeftComponent={this.renderStartDateInputLeftElement}
        />
        {
          showTimeInputs && (
            <Input
              {...inputProps}
              onFocus={this.handleTimeFocus}
              containerClassName={s.timePickerInputContainer}
              className={[s.timePickerInput, hasStartTimeError ? s.inputError : undefined, inputClassName].join(' ')}
              value={displayedTime}
              placeholder={texts.timePlaceholder}
              LeftComponent={this.renderStartTimeInputLeftElement}
            />
          )
        }
      </div>
    );
  };

  onEndDateFocus = () => {
    const { onEndDateTimeFocus } = this.props;

    this.handleEndDateFocus();
    onEndDateTimeFocus();
  };

  onEndTimeFocus = () => {
    const { onEndDateTimeFocus } = this.props;

    this.handleTimeFocus();
    onEndDateTimeFocus();
  };

  handleEndDateTimeBlur = () => {
    const { onEndDateTimeBlur } = this.props;
    onEndDateTimeBlur();
  };

  handleDateFocus(focusedDateInput) {
    this.ectorPicker.current.handleFocus();
    this.setState({
      visiblePicker: DateTimePicker.datePicker,
      focusedDateInput,
    });
  }

  renderEndDateTimeInputComponent = ({ className: inputClassName, ...inputProps }) => {
    const {
      endDate, showTimeInputs, endHour, endMinutes,
    } = this.state;
    const { texts, hasEndDateError, hasEndTimeError } = this.props;

    let displayedTime = '';

    if (endHour && endHour !== '00') {
      displayedTime = `${endHour}h`;
    }
    if (endMinutes && endMinutes !== arbitraryUnsetMinutesValue) {
      displayedTime += endMinutes;
    }

    return (
      <div className={s.splitInputContainer}>
        <Input
          {...inputProps}
          className={[s.datePickerInput, showTimeInputs ? s.fixedWidthDateInput : undefined, hasEndDateError ? s.inputError : undefined, inputClassName].join(' ')}
          containerClassName={s.inputContainer}
          onFocus={this.onEndDateFocus}
          onBlur={this.handleEndDateTimeBlur}
          value={endDate ? endDate.format('ddd DD/MM/YYYY') : ''}
          placeholder={texts.endPlaceholder}
          LeftComponent={this.renderEndDateInputLeftElement}
        />
        {
          showTimeInputs && (
            <Input
              {...inputProps}
              containerClassName={s.timePickerInputContainer}
              className={[s.timePickerInput, hasEndTimeError ? s.inputError : undefined, inputClassName].join(' ')}
              onFocus={this.onEndTimeFocus}
              onBlur={this.handleEndDateTimeBlur}
              value={displayedTime}
              placeholder={texts.timePlaceholder}
              LeftComponent={this.renderEndTimeInputLeftElement}
            />
          )
        }
      </div>
    );
  };

  renderPickerSuggestionsArrow = ({ className, ...props }) => (
    <Arrow {...props} className={[s.suggestionsArrow, className].join(' ')} />
  );

  renderSuggestionsComponent = ({ visible, className, ...rest }) => {
    const {
      visiblePicker,
      startDate,
      endDate,
      focusedDateInput,
      startHour,
      startMinutes,
      endHour,
      endMinutes,
      fromHourRange,
      toHourRange,
      fromMinuteRange,
      toMinuteRange,
    } = this.state;
    const { texts } = this.props;

    return (
      <PickerSuggestions
        {...rest}
        visible={visible}
        className={[s.pickerSuggestions, className].join(' ')}
        ArrowComponent={this.renderPickerSuggestionsArrow}
      >
        <div className={visiblePicker !== DateTimePicker.datePicker ? s.hidden : undefined}>
          <DayPickerRangeController
            verticalBorderSpacing={1}
            horizontalMonthPadding={25}
            firstDayOfWeek={1}
            daySize={35}
            startDate={startDate}
            endDate={endDate}
            onDatesChange={this.handleDateChange}
            hideKeyboardShortcutsPanel
            numberOfMonths={2}
            transitionDuration={0}
            minimumNights={0}
            noBorder
            focusedInput={focusedDateInput}
            onFocusChange={this.handleFocusChange}
            renderMonthElement={this.renderMonthElement}
            renderCalendarDay={this.renderCalendarDay}
            isDayBlocked={this.isDayBlocked}
            isDayHighlighted={this.isDayHighlighted}
          />
        </div>
        <div className={s.hr} />
        {
          visiblePicker === DateTimePicker.timePicker && (
            <TimeSuggestions
              className={s.timeSuggestions}
              containerClassName={s.timeSuggestionsContainer}
              onSelect={this.handleTimeSelect}
              startMinutes={startMinutes}
              startHour={startHour}
              endMinutes={endMinutes}
              endHour={endHour}
              texts={texts}
              fromHourRange={fromHourRange}
              toHourRange={toHourRange}
              fromMinuteRange={fromMinuteRange}
              toMinuteRange={toMinuteRange}
            />
          )
        }
      </PickerSuggestions>
    );
  };

  render() {
    const {
      startDate, endDate, visiblePicker, startHour, startMinutes, endMinutes, endHour,
    } = this.state;
    const extraData = {
      visiblePicker, startDate, endDate, startMinutes, endMinutes, startHour, endHour,
    };
    const {
      error, info, className, onSuggestionsHide,
    } = this.props;

    return (
      <Picker
        ref={this.ectorPicker}
        split
        extraData={extraData}
        FirstInputComponent={this.renderStartDateTimeInputComponent}
        SecondInputComponent={this.renderEndDateTimeInputComponent}
        SuggestionsComponent={this.renderSuggestionsComponent}
        className={[s.picker, className].join(' ')}
        onSuggestionsHide={onSuggestionsHide}
        error={error}
        info={info}
      />
    );
  }
}

DateTimePicker.propTypes = {
  error: PropTypes.string,
  info: PropTypes.string,
  className: PropTypes.string,
  texts: TextsType,
  startDate: PropTypes.string,
  endDate: PropTypes.string,
  onStartDateChange: PropTypes.func,
  onEndDateChange: PropTypes.func,
  onStartTimeChange: PropTypes.func,
  onEndTimeChange: PropTypes.func,
  onEndDateTimeFocus: PropTypes.func,
  onEndDateTimeBlur: PropTypes.func,
  onSuggestionsHide: PropTypes.func,
  fromTimeRange: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.number, PropTypes.string])),
  toTimeRange: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.number, PropTypes.string])),
  hasStartDateError: PropTypes.bool,
  hasStartTimeError: PropTypes.bool,
  hasEndDateError: PropTypes.bool,
  hasEndTimeError: PropTypes.bool,
};

DateTimePicker.defaultProps = {
  error: '',
  info: '',
  className: undefined,
  texts: DefaultTexts,
  startDate: undefined,
  endDate: undefined,
  onStartDateChange: () => null,
  onEndDateChange: () => null,
  onStartTimeChange: () => null,
  onEndTimeChange: () => null,
  onEndDateTimeFocus: () => null,
  onEndDateTimeBlur: () => null,
  onSuggestionsHide: () => null,
  fromTimeRange: undefined,
  toTimeRange: undefined,
  hasStartDateError: false,
  hasStartTimeError: false,
  hasEndDateError: false,
  hasEndTimeError: false,
};

export default DateTimePicker;

export { arbitraryUnsetMinutesValue };
