import { useState } from "react";
import styles from "./styles.module.css";

export default function FeedbackModal({ isOpen, onClose, onSubmit }) {
  const [feedback, setFeedback] = useState("");
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ feedback, rating });
    setFeedback("");
    setRating(0);
    setHover(0);
    onClose();
  };

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <button className={styles.closeButton} onClick={onClose}>
          &times;
        </button>
        <h2>O que está achando? Adoraríamos ouvir você!</h2>
        <p className={styles.subtitle}>
          Sua opinião é muito importante para melhorar nossa experiência.
        </p>

        <form onSubmit={handleSubmit}>
          {/* Avaliação por estrelas */}
          <div className={styles.stars}>
            {[1, 2, 3, 4, 5].map((star) => (
              <span
                key={star}
                className={`${styles.star} ${
                  (hover || rating) >= star ? styles.filled : ""
                }`}
                onClick={() => setRating(star)}
                onMouseEnter={() => setHover(star)}
                onMouseLeave={() => setHover(0)}
              >
                ★
              </span>
            ))}
          </div>

          <textarea
            className={styles.textarea}
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            placeholder="Escreva sua opinião aqui..."
            required
          />

          <button type="submit" className={styles.submitButton}>
            Enviar Feedback
          </button>
        </form>
      </div>
    </div>
  );
}
