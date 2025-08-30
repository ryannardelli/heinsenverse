import { AllCastProvider } from "../providers/AllCastContextProvider";
import { AllCharactersContextProvider } from "../providers/AllCharactersContextProvider";
import { AllEpisodesProvider } from "../providers/AllEpisodesContextProvider";
import { BestCharactersProvider } from "../providers/BestCharacterContextProvider";
import { BestEpisodesProvider } from "../providers/BestEpisodeContextProvider";
import { MainRouter } from "../routers/MainRouter";

function App() {
  return (
    <AllCharactersContextProvider>
    <AllCastProvider>
      <AllEpisodesProvider>
      <BestEpisodesProvider>
        <BestCharactersProvider>
            <MainRouter />
        </BestCharactersProvider>
      </BestEpisodesProvider>
      </AllEpisodesProvider>
    </AllCastProvider>
    </AllCharactersContextProvider>
  );
}

export default App;
