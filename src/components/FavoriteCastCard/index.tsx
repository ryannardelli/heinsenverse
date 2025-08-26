import styles from './styles.module.css';

type FavoriteCastCardProps = {
    image: string,
    name: string,
    nickname: string,
}

export function FavoriteCastCard({ image, name, nickname }: FavoriteCastCardProps) {
    return(
        // <div className={styles.grid}>
        //     <img src={image} alt={name} className={styles.image} />
        //     <div className={styles.info}>
        //         <h3 className={styles.name}>{name}</h3>
        //         <p className={styles.nickname}>{nickname}</p>
        //     </div>
        // </div>

        <div className={styles.grid}>
            <div className={styles.card}>
                <img src={image} alt={name} className={styles.image} />
                <div className={styles.info}>
                    <h3 className={styles.name}>{name}</h3>
                    <p className={styles.nickname}>{nickname}</p>
                </div>
            </div>
        </div>
    );
}