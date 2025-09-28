import styles from './styles.module.css';

type NoResultProps = {
    children: React.ReactNode;
}

export function NoResult( { children }: NoResultProps) {
    return(
        <p className={styles.noResults}>
            {children}
        </p>
    );
}