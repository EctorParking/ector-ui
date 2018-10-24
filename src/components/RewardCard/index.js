import React from 'react';
import PropTypes from 'prop-types';
import Card from '../Card';
import s from './RewardCard.css';
import RewardCardHeader from './RewardCardHeader';
import RewardCardContent from './RewardCardContent';
import RewardCardFooter from './RewardCardFooter';

const RewardCard = ({
  headerImage,
  rewardValue,
  rewardText,
  rewardTooltip,
  footerButtonText,
  footerButtonColor,
  footerOnClick,
}) => {
  const header = <RewardCardHeader headerImage={headerImage} />;
  const footer = (
    <RewardCardFooter
      onClick={footerOnClick}
      buttonText={footerButtonText}
      buttonColor={footerButtonColor}
    />);

  return (
    <Card
      className={s.card}
      HeaderChildren={header}
      FooterChildren={footer}
      footerClassName={s.footer}
      contentClassName={s.content}
    >
      <RewardCardContent
        rewardTooltip={rewardTooltip}
        rewardText={rewardText}
        rewardValue={rewardValue}
      />
    </Card>
  );
};

RewardCard.propTypes = {
  headerImage: PropTypes.string.isRequired,
  rewardValue: PropTypes.string.isRequired,
  rewardText: PropTypes.string.isRequired,
  rewardTooltip: PropTypes.string.isRequired,
  footerButtonText: PropTypes.string.isRequired,
  footerButtonColor: PropTypes.string,
  footerOnClick: PropTypes.func.isRequired,
};

RewardCard.defaultProps = {
  footerButtonColor: '#ffcd02',
};


export default RewardCard;
