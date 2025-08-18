import styles from './styles.module.css';

type ContainerBackgroundProps = {
     children: React.ReactNode;
}

export function ContainerBackground({ children }: ContainerBackgroundProps) {
    return(
        <div className={styles.container}>
            {children}
        </div>
    );
}