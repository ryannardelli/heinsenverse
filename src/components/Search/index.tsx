import type { FilterCharacter } from '../../models/FilterCharacter';
import type { FilterActionSearch } from '../../reducers/FilterCharacterReducer';
import styles from './styles.module.css';
import { SearchCheck } from 'lucide-react';

type SearchProps = {
    state: FilterCharacter,
    dispatch: React.Dispatch<FilterActionSearch>;
}

export function Search({ state, dispatch }: SearchProps) {
    return(
    <form>
        <div className={styles.search}>
            <SearchCheck color='#00000040' />
            <input 
                type="search" 
                className={styles.searchInput} 
                placeholder='Pesquise aqui...'
                value={state.search}
                onChange={(e) => dispatch({ type: "SET_SEARCH", payload: e.target.value })}
             />
        </div>
    </form>
    );
}