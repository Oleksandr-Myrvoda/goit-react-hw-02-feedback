import React from "react";
import PropTypes from "prop-types";

import styles from "./Section.module.css";

const Section = ({ title = "", children }) => (
  <>
    <h2 className={styles.title}>{title}</h2>
    {children}
  </>
);

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default Section;

// Создай компонент <Section title="">, который рендерит секцию с заголовком и детей (children).
