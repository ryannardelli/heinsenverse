import { AllCastProvider } from "../providers/AllCastContextProvider";
import { AllEpisodesProvider } from "../providers/AllEpisodesContextProvider";
import { BestCharactersProvider } from "../providers/BestCharacterContextProvider";
import { BestEpisodesProvider } from "../providers/BestEpisodeContextProvider";
import { MainRouter } from "../routers/MainRouter";

function App() {
  return (
    <AllCastProvider>
      <AllEpisodesProvider>
      <BestEpisodesProvider>
        <BestCharactersProvider>
            <MainRouter />
        </BestCharactersProvider>
      </BestEpisodesProvider>
      </AllEpisodesProvider>
    </AllCastProvider>
  );
}

export default App;
