import PropTypes from 'prop-types';
import { FeedbackWrap, FeedbackBtn, FeedBaclList } from './FeedbackOptions.styled';
import { useState } from 'react';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const [ setValue] = useState(0);

  return (
    <FeedbackWrap>
      {options.map((option, idx) => (
        <FeedBaclList key={option}>
          <FeedbackBtn
            type="button"
            value={idx}
            children={option}
            onClick={() => {
              onLeaveFeedback(option);
              setValue(idx);
            }}
          ></FeedbackBtn>
        </FeedBaclList>
      ))}
    </FeedbackWrap>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;