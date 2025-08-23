import styles from './styles.module.css';

type SubHeadingProps =  {
    children: React.ReactNode;
}

export function SubHeading({children}: SubHeadingProps) {
    return(
        <h2 className={styles.subHeading}>{children}</h2>
    );
}