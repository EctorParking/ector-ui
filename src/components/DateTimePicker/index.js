import * as React from 'react';
import moment from 'moment';
import 'react-dates/initialize';
import { DayPickerRangeController } from 'react-dates';
import {
  Picker, Input, PickerSuggestions, Arrow, Icon,
} from '..';
import s from './DateTimePicker.css';
import TimeSuggestions from './TimeSuggestions';

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
    const { startDate: stateStartDate, endDate: stateEndDate } = this.state;
    const startDate = stateStartDate || now;
    const endDate = stateEndDate || now;

    if (type === TimeSuggestions.startTime) {
      this.setState({
        startDate: startDate.clone().set(units, value),
      });
    } else if (type === TimeSuggestions.endTime) {
      this.setState({
        endDate: endDate.clone().set(units, value),
      });
    }
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

  renderMonthElement = ({ month }) => <div className={s.month}>{month.format('MMMM')}</div>;

  renderStartDateTimeInputComponent = ({ className: inputClassName, ...inputProps }) => {
    const { startDate, showTimeInputs } = this.state;

    return (
      <div className={s.splitInputContainer}>
        <Input
          {...inputProps}
          onFocus={this.handleStartDateFocus}
          className={[s.datePickerInput, showTimeInputs ? s.fixedWidthDateInput : undefined, inputClassName].join(' ')}
          value={startDate ? startDate.format('ddd DD/MM/YYYY') : ''}
          LeftComponent={({ className, ...props }) => <Icon {...props} className={[s.inputIcon, className].join(' ')} name="ec-calendar" />}
        />
        {
          showTimeInputs && (
            <Input
              {...inputProps}
              onFocus={this.handleTimeFocus}
              className={[s.timePickerInput, inputClassName].join(' ')}
              value={startDate ? startDate.format('HH[h]mm') : ''}
              LeftComponent={({ className, ...props }) => <Icon {...props} className={[s.inputIcon, className].join(' ')} name="ec-clock" />}
            />
          )
        }
      </div>
    );
  };

  renderEndDateTimeInputComponent = ({ className: inputClassName, ...inputProps }) => {
    const { endDate, showTimeInputs } = this.state;

    return (
      <div className={s.splitInputContainer}>
        <Input
          {...inputProps}
          className={[s.datePickerInput, showTimeInputs ? s.fixedWidthDateInput : undefined, inputClassName].join(' ')}
          onFocus={this.handleEndDateFocus}
          value={endDate ? endDate.format('ddd DD/MM/YYYY') : ''}
          LeftComponent={({ className, ...props }) => <Icon {...props} className={[s.inputIcon, className].join(' ')} name="ec-calendar" />}
        />
        {
          showTimeInputs && (
            <Input
              {...inputProps}
              className={[s.timePickerInput, inputClassName].join(' ')}
              onFocus={this.handleTimeFocus}
              value={endDate ? endDate.format('HH[h]mm') : ''}
              LeftComponent={({ className, ...props }) => <Icon {...props} className={[s.inputIcon, className].join(' ')} name="ec-clock" />}
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
      visiblePicker, startDate, endDate, focusedDateInput,
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
              startDateId="startDate"
              endDateId="endDate"
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
          visible && visiblePicker === DateTimePicker.timePicker && (
            <TimeSuggestions
              className={s.timeSuggestions}
              onSelect={this.handleTimeSelect}
              startTime={startDate}
              endTime={endDate}
            />
          )
        }
      </PickerSuggestions>
    );
  };

  render() {
    const { startDate, endDate, visiblePicker } = this.state;

    return (
      <Picker
        ref={this.ectorPicker}
        split
        extraData={{ visiblePicker }}
        FirstInputComponent={this.renderStartDateTimeInputComponent}
        SecondInputComponent={this.renderEndDateTimeInputComponent}
        SuggestionsComponent={this.renderSuggestionsComponent}
        firstValue={startDate ? startDate.format() : ''}
        secondValue={endDate ? endDate.format() : ''}
        className={s.picker}
      />
    );
  }
}

export default DateTimePicker;
