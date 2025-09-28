import { useState } from "react";
import styles from "./styles.module.css";

export default function QuizCard({ questionData, onAnswer }) {
  const [selected, setSelected] = useState("");

  const handleClick = (option) => {
    setSelected(option);
    onAnswer(option === questionData.answer);
  };

  return (
    <div className={styles.card}>
      <h2 className={styles.question}>{questionData.question}</h2>
      <div className={styles.options}>
        {questionData.options.map((option) => (
          <button
            key={option}
            className={`${styles.option} ${selected === option ? styles.selected : ""}`}
            onClick={() => handleClick(option)}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}
