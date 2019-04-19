import React from 'react';
import PropTypes from 'prop-types';
import { TimeRange } from '..';
import { DefaultTexts, TextsType } from './DateTimePickerTexts';
import s from './TimeSuggestions.module.css';

const TimeSuggestions = ({
  className, texts, onSelect, startMinutes, startHour, endMinutes, endHour, containerClassName, fromHourRange, fromMinuteRange, toMinuteRange, toHourRange,
}) => {
  const onSelectStartTime = (timeUnits, value) => onSelect(
    TimeSuggestions.startTime,
    timeUnits,
    value,
  );
  const onSelectEndTime = (timeUnits, value) => onSelect(
    TimeSuggestions.endTime,
    timeUnits,
    value,
  );
  const [startFromMinuteRange, endFromMinuteRange] = fromMinuteRange;
  const [startFromHourRange, endFromHourRange] = fromHourRange;
  const [startToMinuteRange, endToMinuteRange] = toMinuteRange;
  const [startToHourRange, endToHourRange] = toHourRange;

  return (
    <div className={[s.container, className].join(' ')}>
      <div className={[s.timeContainer, containerClassName].join(' ')}>
        <div className={s.timeDescription}>
          <span className={s.timeDescriptionTitle}>{texts.fromTimeTitle}</span>
          <span>{texts.fromTimeFirstDescription}</span>
          <span>{texts.fromTimeSecondDescription}</span>
        </div>
        <TimeRange
          onSelect={onSelectStartTime}
          hour={startHour}
          minutes={startMinutes}
          minutesInterval={5}
          startMinute={startFromMinuteRange}
          endMinute={endFromMinuteRange}
          startHour={startFromHourRange}
          endHour={endFromHourRange}
        />
      </div>
      <div className={[s.timeContainer, containerClassName].join(' ')}>
        <div className={s.timeDescription}>
          <span className={s.timeDescriptionTitle}>{texts.toTimeTitle}</span>
          <span>{texts.toTimeFirstDescription}</span>
          <span>{texts.toTimeSecondDescription}</span>
        </div>
        <TimeRange
          onSelect={onSelectEndTime}
          hour={endHour}
          minutes={endMinutes}
          minutesInterval={5}
          startMinute={startToMinuteRange}
          endMinute={endToMinuteRange}
          startHour={startToHourRange}
          endHour={endToHourRange}
        />
      </div>
    </div>
  );
};

TimeSuggestions.defaultProps = {
  className: undefined,
  onSelect: () => null,
  texts: DefaultTexts,
  startMinutes: undefined,
  startHour: undefined,
  endMinutes: undefined,
  endHour: undefined,
  containerClassName: undefined,
  fromHourRange: [7, 24],
  fromMinuteRange: [0, 60],
  toHourRange: [7, 24],
  toMinuteRange: [0, 60],
};

TimeSuggestions.propTypes = {
  className: PropTypes.string,
  containerClassName: PropTypes.string,
  onSelect: PropTypes.func,
  startMinutes: PropTypes.string,
  startHour: PropTypes.string,
  endMinutes: PropTypes.string,
  endHour: PropTypes.string,
  texts: TextsType,
  fromHourRange: PropTypes.arrayOf(PropTypes.number),
  toHourRange: PropTypes.arrayOf(PropTypes.number),
  fromMinuteRange: PropTypes.arrayOf(PropTypes.number),
  toMinuteRange: PropTypes.arrayOf(PropTypes.number),
};

TimeSuggestions.startTime = 'startTime';
TimeSuggestions.endTime = 'endTime';

export default TimeSuggestions;
