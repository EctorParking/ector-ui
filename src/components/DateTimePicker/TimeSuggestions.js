import React from 'react';
import PropTypes from 'prop-types';
import { TimeRange } from '..';
import { DefaultTexts, TextsType } from './DateTimePickerTexts';
import s from './TimeSuggestions.module.css';

const TimeSuggestions = ({
  className, texts, onSelect, startMinutes, startHour, endMinutes, endHour, containerClassName,
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
};

TimeSuggestions.startTime = 'startTime';
TimeSuggestions.endTime = 'endTime';

export default TimeSuggestions;
