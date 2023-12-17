import React, { useState } from 'react';
import Section from './Section/Section';
import FeedbackOptions from './FeedbackОptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';

const App = () => {
  const [feedback, setFeedback] = useState({ good: 0, neutral: 0, bad: 0 });

  const leaveFeedback = (option) => {
    setFeedback((prevFeedback) => ({ ...prevFeedback, [option]: prevFeedback[option] + 1 }));
  };

  const total = feedback.good + feedback.neutral + feedback.bad;
  const positivePercentage = Math.round((feedback.good * 100) / total);

  return (
    <div>
      <Section title="Please Leave feedback">
        <FeedbackOptions
          options={Object.keys(feedback)}
          onLeaveFeedback={leaveFeedback}
        />
      </Section>

      <Section title="Statistics">
        <Statistics
          good={feedback.good}
          neutral={feedback.neutral}
          bad={feedback.bad}
          total={total}
          positivePercentage={positivePercentage}
        />
      </Section>
    </div>
  );
};

export default App;
