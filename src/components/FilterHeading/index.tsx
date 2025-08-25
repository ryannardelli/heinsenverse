// FilterHeading.tsx
import styles from "./styles.module.css";

export default function FilterHeading() {
  return (
    <div className={styles.filterHeadingContainer}>
      <form className={styles.filterForm}>
        <div className={styles.filterItem}>
          <label htmlFor="date">Data:</label>
          <input type="date" id="date" name="date" />
        </div>

        <div className={styles.filterItem}>
          <label htmlFor="season">Temporada:</label>
          <select id="season" name="season">
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
          <select id="episode" name="episode">
            <option value="">Todos</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
        </div>

        <div className={styles.filterItem}>
          <label htmlFor="search">Pesquisar</label>
          <input
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
