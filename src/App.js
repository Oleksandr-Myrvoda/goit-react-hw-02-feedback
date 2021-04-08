import React from "react";

import FeedbackOptions from "./components/FeedbackOptions";
import Statistics from "./components/Statistics";
import Section from "./components/Section";
import Notification from "./components/Notification";

import options from "./db/options.json";

class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleFeedback = (event) => {
    const { name } = event.currentTarget;
    this.setState((prevState) => ({ [name]: prevState[name] + 1 }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    return (good / this.countTotalFeedback()) * 100;
  };

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const positivePercentage = Math.round(this.countPositiveFeedbackPercentage());
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions options={options} onLeaveFeedback={this.handleFeedback} />
        </Section>
        {total < 1 ? (
          <Notification message="No feedback given" />
        ) : (
          <Section title="Statistics">
            <Statistics good={good} neutral={neutral} bad={bad} total={total} positivePercentage={positivePercentage} />
          </Section>
        )}
      </>
    );
  }
}

export default App;
