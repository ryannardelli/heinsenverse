import { BestEpisodesProvider } from "../providers/BestEpisodeContextProvider";
import { MainRouter } from "../routers/MainRouter";

function App() {
  return (
    <BestEpisodesProvider>
      <MainRouter />
    </BestEpisodesProvider>
  );
}

export default App;
