import { AllEpisodesProvider } from "../providers/AllEpisodesContextProvider";
import { BestCharactersProvider } from "../providers/BestCharacterContextProvider";
import { BestEpisodesProvider } from "../providers/BestEpisodeContextProvider";
import { MainRouter } from "../routers/MainRouter";

function App() {
  return (
    <AllEpisodesProvider>
    <BestEpisodesProvider>
      <BestCharactersProvider>
          <MainRouter />
      </BestCharactersProvider>
    </BestEpisodesProvider>
    </AllEpisodesProvider>
  );
}

export default App;
