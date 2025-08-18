import { BestCharactersProvider } from "../providers/BestCharacterContextProvider";
import { BestEpisodesProvider } from "../providers/BestEpisodeContextProvider";
import { MainRouter } from "../routers/MainRouter";

function App() {
  return (
    <BestEpisodesProvider>
      <BestCharactersProvider>
          <MainRouter />
      </BestCharactersProvider>
    </BestEpisodesProvider>
  );
}

export default App;
