import { useEffect, useState } from "react";
import { AllCastProvider } from "../providers/AllCastContextProvider";
import { AllCharactersContextProvider } from "../providers/AllCharactersContextProvider";
import { AllEpisodesProvider } from "../providers/AllEpisodesContextProvider";
import { BestCharactersProvider } from "../providers/BestCharacterContextProvider";
import { BestEpisodesProvider } from "../providers/BestEpisodeContextProvider";
import { MainRouter } from "../routers/MainRouter";
import FeedbackModal from "./FeedbackModal";

function App() {
   const [isModalOpen, setIsModalOpen] = useState(false);

  const handleFeedbackSubmit = (feedback) => {
    console.log("Feedback recebido:", feedback);
    // Aqui você pode enviar para sua API
    setIsModalOpen(false); // fecha o modal após envio
  };

  // Exemplo: abrir o modal automaticamente após 3 segundos
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsModalOpen(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AllCharactersContextProvider>
    <AllCastProvider>
      <AllEpisodesProvider>
      <BestEpisodesProvider>
        <BestCharactersProvider>
            <MainRouter />
            
            <FeedbackModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onSubmit={handleFeedbackSubmit}
              />
        </BestCharactersProvider>
      </BestEpisodesProvider>
      </AllEpisodesProvider>
    </AllCastProvider>
    </AllCharactersContextProvider>
  );
}

export default App;
