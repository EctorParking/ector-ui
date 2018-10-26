import React, { Component } from 'react';
import PropTypes from 'prop-types';
import s from './RewardCardFooter.css';
import RoundedButton from '../RoundedButton';

class RewardCardFooter extends Component {
  renderFooter = () => {
    const {
      buttonText,
      buttonTextLogin,
      onClick,
      prefixTestid,
      buttonClassName,
      isSelected,
      isConnected,
      selectedIcon,
    } = this.props;

    if (isConnected && isSelected) {
      return (<span className={s.selected}>{selectedIcon}</span>);
    } else if (isSelected && !isConnected) {
      return (<RoundedButton onClick={onClick} text={buttonTextLogin} testid={`${prefixTestid}RewardCardFooterButton`} className={buttonClassName} />);
    }
    return (<RoundedButton onClick={onClick} text={buttonText} testid={`${prefixTestid}RewardCardFooterButton`} className={buttonClassName} />);
  };

  render() {
    return (
      <div>
        {this.renderFooter()}
      </div>
    );
  }
}

RewardCardFooter.propTypes = {
  buttonText: PropTypes.string.isRequired,
  buttonTextLogin: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  prefixTestid: PropTypes.string,
  buttonClassName: PropTypes.string,
  isSelected: PropTypes.bool,
  isConnected: PropTypes.bool,
  selectedIcon: PropTypes.string,
};

RewardCardFooter.defaultProps = {
  prefixTestid: '',
  buttonClassName: '',
  onClick: () => {},
  isSelected: false,
  isConnected: false,
  selectedIcon: '\u2713',
};


export default RewardCardFooter;
