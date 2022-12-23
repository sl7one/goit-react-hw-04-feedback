import React from 'react';
import FeedBackOptions from './widget/FeedBackOptions';
import Section from './widget/Section';
import Statistics from './widget/Statistic';
import Notification from './widget/Notification';
import { useState } from 'react';
import { useEffect } from 'react';

const btns = ['Good', 'Neutral', 'Bad'];

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [summ, setSumm] = useState(0);
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    setSumm(good + neutral + bad);
  }, [good, neutral, bad]);

  useEffect(() => {
    setPercentage(Number(((good / summ) * 100).toFixed(2)));
  }, [summ, good]);

  const onClick = event => {
    const { id } = event.target.dataset;

    switch (id) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;
      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;
      case 'bad':
        setBad(prevState => prevState + 1);
        break;
      default:
        break;
    }
  };

  return (
    <>
      <Section title="Please leave feedback">
        <FeedBackOptions options={btns} onLeaveFeedback={onClick} />
      </Section>

      <Section title="Statistics">
        {summ > 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={summ}
            positivePercentage={percentage}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </>
  );
};

export default App;
