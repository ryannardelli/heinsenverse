import styles from './styles.module.css';
import { SearchCheck } from 'lucide-react';

type SearchProps = {
   value: string;
   onChange: (value: string) => void;
   placeholder?: string;
}

export function Search({ value, onChange, placeholder = "Pesquisar" }: SearchProps) {
    return(
    <form>
        <div className={styles.search}>
            <SearchCheck color='#00000040' />
            <input 
                type="search" 
                className={styles.searchInput} 
                placeholder={placeholder}
                value={value}
                onChange={(e) => onChange(e.target.value)}
             />
        </div>
    </form>
    );
}