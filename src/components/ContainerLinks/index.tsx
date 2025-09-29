import styles from './styles.module.css';

type ContainerLinksProps = {
    children: React.ReactNode;
}

export function ContainerLinks({ children }: ContainerLinksProps) {
    return(
        <div className={styles.container}>
            { children }
        </div>
    );
}