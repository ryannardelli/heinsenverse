import { AllCharactersProvider } from "../providers/AllCharactersContextProvider";
import { AllEpisodesProvider } from "../providers/AllEpisodesContextProvider";
import { BestCharactersProvider } from "../providers/BestCharacterContextProvider";
import { BestEpisodesProvider } from "../providers/BestEpisodeContextProvider";
import { MainRouter } from "../routers/MainRouter";

function App() {
  return (
    <AllCharactersProvider>
      <AllEpisodesProvider>
      <BestEpisodesProvider>
        <BestCharactersProvider>
            <MainRouter />
        </BestCharactersProvider>
      </BestEpisodesProvider>
      </AllEpisodesProvider>
    </AllCharactersProvider>
  );
}

export default App;
