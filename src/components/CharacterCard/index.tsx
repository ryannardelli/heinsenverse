import styles from './styles.module.css';

import { useEffect } from "react";
import { useAllCharactersContext } from "../../hooks/useAllCharactersContext";
import { motion } from 'framer-motion';

export function CharacterCard() {
    const { allCharacters } = useAllCharactersContext();

    useEffect(() => {
        console.log(allCharacters);
    }, [allCharacters]);

    return (
        <div className={styles.grid}>
            {allCharacters.map((char) => (
                <motion.div
                    key={char.character.id}
                    className={styles.card}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <img
                        src={char.character.image?.original} // verifica se existe
                        alt={char.character.name}
                        className={styles.image}
                    />

                    <div className={styles.info}>
                        <h3 className={styles.name}>{char.character.name}</h3>                  
                    </div>
                </motion.div>
            ))}
        </div>
    );
}
