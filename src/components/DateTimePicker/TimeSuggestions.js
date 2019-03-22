import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { TimeRange } from '..';
import s from './TimeSuggestions.css';

const TimeSuggestions = ({
  className, texts, onSelect, startTime, endTime,
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
      <div className={s.timeContainer}>
        <div className={s.timeDescription}>
          <span className={s.timeDescriptionTitle}>{texts.fromTimeTitle}</span>
          <span>{texts.fromTimeFirstDescription}</span>
          <span>{texts.fromTimeSecondDescription}</span>
        </div>
        <TimeRange
          onSelect={onSelectStartTime}
          hour={startTime ? startTime.format('HH') : undefined}
          minutes={startTime ? startTime.format('mm') : undefined}
          minutesInterval={5}
        />
      </div>
      <div className={s.timeContainer}>
        <div className={s.timeDescription}>
          <span className={s.timeDescriptionTitle}>{texts.toTimeTitle}</span>
          <span>{texts.toTimeFirstDescription}</span>
          <span>{texts.toTimeSecondDescription}</span>
        </div>
        <TimeRange
          onSelect={onSelectEndTime}
          hour={endTime ? endTime.format('HH') : undefined}
          minutes={endTime ? endTime.format('mm') : undefined}
          minutesInterval={5}
        />
      </div>
    </div>
  );
};

TimeSuggestions.defaultProps = {
  className: undefined,
  onSelect: () => null,
  startTime: undefined,
  texts: {
    fromTimeTitle: 'Départ',
    fromTimeFirstDescription: 'Heure d\'arrivée',
    fromTimeSecondDescription: 'de votre avion',
    toTimeTitle: 'Retour',
    toTimeFirstDescription: 'Heure d\'arrivée',
    toTimeSecondDescription: 'au dépose minute',
  },
  endTime: undefined,
};

TimeSuggestions.propTypes = {
  className: PropTypes.string,
  onSelect: PropTypes.func,
  startTime: PropTypes.instanceOf(moment),
  endTime: PropTypes.instanceOf(moment),
  texts: PropTypes.shape({
    fromTimeTitle: PropTypes.string,
    fromTimeFirstDescription: PropTypes.string,
    fromTimeSecondDescription: PropTypes.string,
    toTimeTitle: PropTypes.string,
    toTimeFirstDescription: PropTypes.string,
    toTimeSecondDescription: PropTypes.string,
  }),
};

TimeSuggestions.startTime = 'startTime';
TimeSuggestions.endTime = 'endTime';

export default TimeSuggestions;
