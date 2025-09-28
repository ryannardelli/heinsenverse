import { useEffect, useState } from "react";

export function TimerQuiz() {
     const [segundos, setSegundos] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSegundos((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(interval); // limpa o intervalo ao desmontar
  }, []);

  // Formata em MM:SS
  const minutos = Math.floor(segundos / 60);
  const segundosRestantes = segundos % 60;

  const formatar = (num: number) => num.toString().padStart(2, "0");

  return (
    <div style={{ fontSize: "2rem", textAlign: "center", margin: "20px" }}>
      {formatar(minutos)}:{formatar(segundosRestantes)}
    </div>
  );
}