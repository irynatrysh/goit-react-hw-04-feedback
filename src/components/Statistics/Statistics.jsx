import PropTypes from 'prop-types';
import { StatisticWrap, StatisticDescription } from './Statistics.styled';
import { Notification } from 'components/Notification/Notification';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return total ? (
   
      <StatisticWrap>
        <li>
          <StatisticDescription>Good: {good}</StatisticDescription>
        </li>
        <li>
          <StatisticDescription>Neutral: {neutral}</StatisticDescription>
        </li>
        <li>
          <StatisticDescription>Bad: {bad}</StatisticDescription>
        </li>
        <li>
          <StatisticDescription>Total: {total}</StatisticDescription>
        </li>
        <li>
          <StatisticDescription>Positive feedback:  {positivePercentage}%</StatisticDescription>
        </li>
      </StatisticWrap>) : (<Notification message="There is no feedback"/>)

};

Statistics.propTypes = {
    good: PropTypes.number,
    neutral: PropTypes.number,
    bad: PropTypes.number,
    total: PropTypes.number,
    positivePercentage: PropTypes.number,
  };