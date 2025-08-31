import styles from './styles.module.css';

type ContainerSearchProps = {
    children: React.ReactNode;
}

export function ContainerSearch({children}: ContainerSearchProps) {
    return(
        <div className={styles.containerSearch}>
            {children}
        </div>
    );
}