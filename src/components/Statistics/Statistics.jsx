import PropTypes from 'prop-types';
import { List, Stat } from './Statistics.styled';
import { Notification } from '../Notification/Notification';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return total !== 0 ? (
    <List>
      <Stat>Good: {good}</Stat>
      <Stat>Neutral: {neutral}</Stat>
      <Stat>Bad: {bad}</Stat>
      <Stat>Total: {total}</Stat>
      <Stat>Positive feedback: {Math.round(positivePercentage)}%</Stat>
    </List>
  ) : (
    <Notification message="There is no feedback" />
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
