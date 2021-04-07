import React from "react";

import FeedbackOptions from "./components/FeedbackOptions";
import Statistics from "./components/Statistics";
import Section from "./components/Section";
import Notification from "./components/Notification";

class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  // handleGood = () => {
  //   this.setState((prevState) => ({
  //     good: prevState.good + 1,
  //   }));
  // };
  // handleNeutral = () => {
  //   this.setState((prevState) => ({
  //     neutral: prevState.neutral + 1,
  //   }));
  // };
  // handleBad = () => {
  //   this.setState((prevState) => ({
  //     bad: prevState.bad + 1,
  //   }));
  // };

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
    const positivePercentage = this.countPositiveFeedbackPercentage();

    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions options={this.state} onLeaveFeedback={this.handleFeedback} />
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

// Шаг 3
// Вынеси отображение статистики в отдельный компонент <Statistics good={} neutral={} bad={} total={} positivePercentage={}>.
// Вынеси блок кнопок в компонент <FeedbackOptions options={} onLeaveFeedback={}>.
// Создай компонент <Section title="">, который рендерит секцию с заголовком и детей (children). Оберни каждый из <Statistics> и <FeedbackOptions> в созданный компонент секции.
// Шаг 4
// Расширь функционал приложения так, чтобы блок статистики рендерился только после того, как был собран хотя бы один отзыв.
//  Сообщение об отсутствиии статистики вынеси в компонент <Notification message="No feedback given">.
