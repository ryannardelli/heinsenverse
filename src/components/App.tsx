import { AllCastProvider } from "../providers/AllCastContextProvider";
import { AllCharactersProvider } from "../providers/AllCharactersProvider";
import { AllEpisodesProvider } from "../providers/AllEpisodesContextProvider";
import { BestCharactersProvider } from "../providers/BestCharacterContextProvider";
import { BestEpisodesProvider } from "../providers/BestEpisodeContextProvider";
import { MainRouter } from "../routers/MainRouter";

function App() {
  return (
    <AllCharactersProvider>
    <AllCastProvider>
      <AllEpisodesProvider>
      <BestEpisodesProvider>
        <BestCharactersProvider>
            <MainRouter />
        </BestCharactersProvider>
      </BestEpisodesProvider>
      </AllEpisodesProvider>
    </AllCastProvider>
    </AllCharactersProvider>
  );
}

export default App;
