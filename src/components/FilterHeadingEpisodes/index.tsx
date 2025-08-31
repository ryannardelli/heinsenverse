import type { FilterEpisodes } from "../../models/FilterEpisodes";
import type { FilterAction } from "../../reducers/FilterEpisodesReducer";
import styles from "./styles.module.css";

type FilterHeadingProps = {
  state: FilterEpisodes;
  dispatch: React.Dispatch<FilterAction>
}

export default function FilterHeadingEpisodes({ state, dispatch }: FilterHeadingProps) {

  return (
    <div className={styles.filterHeadingContainer}>
      <form className={styles.filterForm}>
        <div className={styles.filterItem}>
          <label htmlFor="season">Temporada:</label>
          <select
            onChange={(e) => dispatch({ type: "SET_SEASON", payload: e.target.value })}
            id="season"
            value={state.season} 
            name="season">
            <option value="">Todas</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>

        <div className={styles.filterItem}>
          <label htmlFor="episode">Episódio:</label>
          <select id="episode" name="episode" onChange={(e) => dispatch({ type: "SET_EPISODE", payload: e.target.value })}>
            <option value="">Todos</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
            <option value="11">11</option>
            <option value="12">12</option>
            <option value="13">13</option>
            <option value="14">14</option>
            <option value="15">15</option>
            <option value="16">16</option>
          </select>
        </div>

        <div className={styles.filterItem}>
          <label htmlFor="search">Pesquisar</label>
          <input
            onChange={(e) => dispatch({ type: "SET_SEARCH", payload: e.target.value })}
            type="text"
            id="search"
            name="search"
            placeholder="Pesquisar"
          />
        </div>
      </form>
    </div>
  );
}
