import styles from './styles.module.css';
import { SearchCheck } from 'lucide-react';

export function Search() {
    return(
    <form>
        <div className={styles.search}>
            <SearchCheck color='#00000040' />
            <input type="search" className={styles.searchInput} placeholder='Pesquise aqui...' />
        </div>
    </form>
    );
}