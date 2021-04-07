import React from "react";
import PropTypes from "prop-types";

import styles from "./FeedbackOptions.module.css";

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const { good, neutral, bad } = options;
  return (
    <ul className={styles.list}>
      <li className={styles.item}>
        <button className={styles.button} type="button" name="good" data-value={good} onClick={onLeaveFeedback}>
          Good
        </button>
      </li>
      <li className={styles.item}>
        <button className={styles.button} type="button" name="neutral" data-value={neutral} onClick={onLeaveFeedback}>
          Neutral
        </button>
      </li>
      <li className={styles.item}>
        <button className={styles.button} type="button" name="bad" data-value={bad} onClick={onLeaveFeedback}>
          Bad
        </button>
      </li>
    </ul>
  );
};

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
  options: PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }).isRequired,
};

export default FeedbackOptions;

// Вынеси блок кнопок в компонент <FeedbackOptions options={} onLeaveFeedback={}>.
