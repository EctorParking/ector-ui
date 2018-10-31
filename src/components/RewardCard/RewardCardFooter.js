import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import s from './RewardCardFooter.css';
import RoundedButton from '../RoundedButton';
import RewardCardTextTypes from './RewardCardTextTypes';

const RewardCardFooter = ({
  onClick,
  prefixTestid,
  buttonClassName,
  isSelected,
  isConnected,
  selectedIcon,
  texts,
  hasExternalCard,
  isExternalCardUpdatable,
}) => (
  <Fragment>
    {isConnected && isSelected && hasExternalCard && isExternalCardUpdatable ?
      (<span className={s.selected}>{selectedIcon}</span>)
      : (<RoundedButton onClick={onClick} text={texts.footerButtonText} testid={`${prefixTestid}RewardCardFooterButton`} className={buttonClassName} />)
    }
  </Fragment>
);

RewardCardFooter.propTypes = {
  texts: RewardCardTextTypes.isRequired,
  onClick: PropTypes.func,
  prefixTestid: PropTypes.string,
  buttonClassName: PropTypes.string,
  isSelected: PropTypes.bool,
  isConnected: PropTypes.bool,
  selectedIcon: PropTypes.string,
  hasExternalCard: PropTypes.bool,
  isExternalCardUpdatable: PropTypes.bool,
};

RewardCardFooter.defaultProps = {
  prefixTestid: '',
  buttonClassName: '',
  onClick: () => {},
  isSelected: false,
  isConnected: false,
  selectedIcon: '\u2713',
  hasExternalCard: true,
  isExternalCardUpdatable: false,
};


export default RewardCardFooter;
