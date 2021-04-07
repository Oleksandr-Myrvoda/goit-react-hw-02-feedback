import React from "react";
import PropTypes from "prop-types";

import styles from "./Statistics.module.css";

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <ul className={styles.statisticsBox}>
      <li>Good: {good}</li>
      <li>Neutral: {neutral}</li>
      <li>Bad: {bad}</li>
      <li>Total: {total}</li>
      <li>Positive feedback: {positivePercentage}%</li>
    </ul>
  );
};

Statistics.propTypes = {
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
  state: PropTypes.arrayOf(
    PropTypes.shape({
      good: PropTypes.number.isRequired,
      neutral: PropTypes.number.isRequired,
      bad: PropTypes.number.isRequired,
    }).isRequired
  ),
};

export default Statistics;

// Шаг 3
// Вынеси отображение статистики в отдельный компонент <Statistics good={} neutral={} bad={} total={} positivePercentage={}>.
// Вынеси блок кнопок в компонент <FeedbackOptions options={} onLeaveFeedback={}>.
// Создай компонент <Section title="">, который рендерит секцию с заголовком и детей (children). Оберни каждый из <Statistics> и <FeedbackOptions> в созданный компонент секции.
// Шаг 4
// Расширь функционал приложения так, чтобы блок статистики рендерился только после того, как был собран хотя бы один отзыв.
//  Сообщение об отсутствиии статистики вынеси в компонент <Notification message="No feedback given">.
