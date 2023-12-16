import PropTypes from 'prop-types';
import {
  FeedbackWrap,
  FeedbackBtn,
  FeedBaclList,
} from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <FeedbackWrap>
      {options.map((option, idx) => {
        return (
          <FeedBaclList key={option}>
            <FeedbackBtn
              type="button"
              value={idx}
              children={option}
              onClick={() => onLeaveFeedback(option)}
            ></FeedbackBtn>
          </FeedBaclList>
        );
      })}
    </FeedbackWrap>
  );
};

FeedbackOptions.protoType = {
  onLeaveFeedback: PropTypes.func,
};