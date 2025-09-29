import { useState } from "react";
import QuizCard from "../../components/QuizCard";
import { quizData } from "../../components/QuizCard/quizData";
import styles from "./styles.module.css";
import { TimerQuiz } from "../../components/TimerQuiz";

export default function Quiz() {
  const [score, setScore] = useState(0);
  const [started, setStarted] = useState(false);

  const isAuth = false;

  const handleAnswer = (isCorrect) => {
    if (isCorrect) setScore(score + 1);
  };

  const startQuiz = () => {
    setStarted(true);
  };

  return (
      <div className={styles.container}>
        {!started ? (
          <div className={styles.startScreen}>
            <h1 className={styles.header}>Breaking Bad Quiz</h1>
            <p className={styles.message}>Teste seus conhecimentos sobre Breaking Bad!</p>
            {isAuth ? (
              <button className={styles.startButton} onClick={startQuiz}>
                Começar Quiz
              </button>
            ) : (
              <div className={styles.loginPrompt}>
                <p>
                  Você ainda não está logado. <br />
                  Faça login para poder começar o quiz.
                </p>
              </div>
            )}
            
          </div>
        ) : (
          <>
            <h1 className={styles.header}>Breaking Bad Quiz</h1>
            <TimerQuiz />
            {quizData.map((q) => (
              <QuizCard key={q.id} questionData={q} onAnswer={handleAnswer} />
            ))}
            <div className={styles.score}>
              Sua pontuação: {score}/{quizData.length}
            </div>
          </>
        )}
      </div>
  );
}
