import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import s from './RewardCardFooter.module.css';
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
  fetching,
}) => (
  <>
    {isConnected && isSelected && hasExternalCard && isExternalCardUpdatable ? (
      <i className={`icon-${selectedIcon} ${s.selected}`} />
    ) : (
      <RoundedButton
        onClick={onClick}
        text={texts.footerButtonText}
        testid={`${prefixTestid}RewardCardFooterButton`}
        className={!fetching ? buttonClassName : undefined}
        fetching={fetching}
      />
    )}
  </>
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
  fetching: PropTypes.bool,
};

RewardCardFooter.defaultProps = {
  prefixTestid: '',
  buttonClassName: '',
  onClick: () => {},
  isSelected: false,
  isConnected: false,
  selectedIcon: '\u2713',
  hasExternalCard: true,
  isExternalCardUpdatable: true,
  fetching: false,
};

export default RewardCardFooter;
