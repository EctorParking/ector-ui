import * as React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import 'react-dates/initialize';
import { DayPickerRangeController } from 'react-dates';
import {
  Picker, Input, PickerSuggestions, Arrow, Icon, TimeRange,
} from '..';
import s from './DateTimePicker.css';
import TimeSuggestions from './TimeSuggestions';
import iconClock from '../../images/clock.svg';

const now = moment();

class DateTimePicker extends React.PureComponent {
  static startDate = 'startDate';

  static endDate = 'endDate';

  static timePicker = 'timePicker';

  static datePicker = 'datePicker';

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
      focusedDateInput: DateTimePicker.startDate,
      visiblePicker: DateTimePicker.datePicker,
      showTimeInputs: false,
    };
  }

  handleDateChange = ({ startDate, endDate }) => {
    this.setState(prevState => ({
      startDate,
      endDate,
      focusedDateInput: prevState.focusedDateInput === DateTimePicker.startDate && startDate
        ? DateTimePicker.endDate
        : DateTimePicker.startDate,
      visiblePicker: prevState.visiblePicker === DateTimePicker.datePicker && endDate && startDate
        ? DateTimePicker.timePicker
        : prevState.visiblePicker,
      showTimeInputs: !!(endDate || prevState.endDate),
    }));
  };

  handleTimeSelect = (type, units, value) => {
    const unitsToStateVariable = {
      [TimeRange.minutes]: type === TimeSuggestions.startTime ? 'startMinutes' : 'endMinutes',
      [TimeRange.hour]: type === TimeSuggestions.startTime ? 'startHour' : 'endHour',
    };

    this.setState({
      [unitsToStateVariable[units]]: value,
    });
  };

  isDayBlocked = day => day.isBefore(now);

  handleTimeFocus = () => {
    this.ectorPicker.current.handleFocus();
    this.setState({ visiblePicker: DateTimePicker.timePicker });
  };

  handleDateFocus(focusedDateInput) {
    this.ectorPicker.current.handleFocus();
    this.setState({
      visiblePicker: DateTimePicker.datePicker,
      focusedDateInput,
    });
  }

  renderMonthElement = ({ month }) => <div className={s.month}>{month.format('MMMM YYYY')}</div>;

  renderDateInputLeftElement = ({ className, ...props }) => <Icon {...props} className={[s.inputIcon, className].join(' ')} name="ec-calendar" />;

  renderTimeInputLeftElement = ({ className, ...props }) => <Icon {...props} className={[s.inputIcon, className].join(' ')} src={iconClock} />;

  renderStartDateTimeInputComponent = ({ className: inputClassName, ...inputProps }) => {
    const {
      startDate, showTimeInputs, startMinutes, startHour,
    } = this.state;

    return (
      <div className={s.splitInputContainer}>
        <Input
          {...inputProps}
          onFocus={this.handleStartDateFocus}
          className={[s.datePickerInput, showTimeInputs ? s.fixedWidthDateInput : undefined, inputClassName].join(' ')}
          containerClassName={s.inputContainer}
          value={startDate ? startDate.format('ddd DD/MM/YYYY') : ''}
          LeftComponent={this.renderDateInputLeftElement}
        />
        {
          showTimeInputs && (
            <Input
              {...inputProps}
              onFocus={this.handleTimeFocus}
              containerClassName={s.timePickerInputContainer}
              className={[s.timePickerInput, inputClassName].join(' ')}
              value={startHour ? `${startHour}h${startMinutes || ''}` : ''}
              LeftComponent={this.renderTimeInputLeftElement}
            />
          )
        }
      </div>
    );
  };

  renderEndDateTimeInputComponent = ({ className: inputClassName, ...inputProps }) => {
    const {
      endDate, showTimeInputs, endHour, endMinutes,
    } = this.state;

    return (
      <div className={s.splitInputContainer}>
        <Input
          {...inputProps}
          className={[s.datePickerInput, showTimeInputs ? s.fixedWidthDateInput : undefined, inputClassName].join(' ')}
          containerClassName={s.inputContainer}
          onFocus={this.handleEndDateFocus}
          value={endDate ? endDate.format('ddd DD/MM/YYYY') : ''}
          LeftComponent={this.renderDateInputLeftElement}
        />
        {
          showTimeInputs && (
            <Input
              {...inputProps}
              containerClassName={s.timePickerInputContainer}
              className={[s.timePickerInput, inputClassName].join(' ')}
              onFocus={this.handleTimeFocus}
              value={endHour ? `${endHour}h${endMinutes || ''}` : ''}
              LeftComponent={this.renderTimeInputLeftElement}
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
    } = this.state;

    return (
      <PickerSuggestions
        {...rest}
        visible={visible}
        className={[s.pickerSuggestions, className].join(' ')}
        ArrowComponent={this.renderPickerSuggestionsArrow}
      >
        {
          visible && visiblePicker === DateTimePicker.datePicker && (
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
              noBorder
              focusedInput={focusedDateInput}
              renderMonthElement={this.renderMonthElement}
              isDayBlocked={this.isDayBlocked}
            />
          )
        }
        {
          visible && (
            <div className={s.hr} />
          )
        }
        {
          visible && visiblePicker === DateTimePicker.timePicker && (
            <TimeSuggestions
              className={s.timeSuggestions}
              containerClassName={s.timeSuggestionsContainer}
              onSelect={this.handleTimeSelect}
              startMinutes={startMinutes}
              startHour={startHour}
              endMinutes={endMinutes}
              endHour={endHour}
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
    const { error } = this.props;

    return (
      <Picker
        ref={this.ectorPicker}
        split
        extraData={extraData}
        FirstInputComponent={this.renderStartDateTimeInputComponent}
        SecondInputComponent={this.renderEndDateTimeInputComponent}
        SuggestionsComponent={this.renderSuggestionsComponent}
        className={s.picker}
        error={error}
      />
    );
  }
}

DateTimePicker.propTypes = {
  error: PropTypes.string,
};

DateTimePicker.defaultProps = {
  error: '',
};

export default DateTimePicker;
