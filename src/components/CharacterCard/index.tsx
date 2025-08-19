import { useState } from "react";
import styles from "./styles.module.css";

type Character = {
  id: number;
  name: string;
  nickname: string;
  image: string;
};

export function CharacterCard() {
  // Lista de personagens diretamente no componente
  const characters: Character[] = [
    {
      id: 1,
      name: "Walter White",
      nickname: "Heisenberg",
      image: "https://upload.wikimedia.org/wikipedia/en/0/03/Walter_White_S5B.png",
    },
    {
      id: 2,
      name: "Jesse Pinkman",
      nickname: "Cap n’ Cook",
      image: "https://criticalhits.com.br/wp-content/uploads/2024/03/jesse-pinkman.jpg",
    },
    {
      id: 3,
      name: "Saul Goodman",
      nickname: "Jimmy McGill",
      image: "https://upload.wikimedia.org/wikipedia/en/3/34/Jimmy_McGill_BCS_S3.png",
    },

    {
    id: 4,
    name: "Gus Fring",
    nickname: "Gustavo Fring",
    image: "https://upload.wikimedia.org/wikipedia/en/6/69/Gustavo_Fring_BCS_S3E10.png",
  },
  {
    id: 5,
    name: "Mike Ehrmantraut",
    nickname: "Mike",
    image: "https://upload.wikimedia.org/wikipedia/en/thumb/e/ea/Mike_Ehrmantraut_BCS_S3.png/250px-Mike_Ehrmantraut_BCS_S3.png",
  },
  {
    id: 6,
    name: "Skyler White",
    nickname: "Sky",
    image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj5wiDUTqWk8r5ULwqiGMfJqkkXzMTPEOON1mSTZIMHJXZijiP4bP50HZ_JKaotpkctu7XSCHjEZHARhPHqQT6_Ogt41w9WQaVYlkgCRQ98asreZGrj4xPF-SzOW55I8b2kzlQ3INtDMIw/w1200-h630-p-k-no-nu/skyler-white-anna-gunn-2.jpg",
  },

   {
    id: 6,
    name: "Skyler White",
    nickname: "Sky",
    image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj5wiDUTqWk8r5ULwqiGMfJqkkXzMTPEOON1mSTZIMHJXZijiP4bP50HZ_JKaotpkctu7XSCHjEZHARhPHqQT6_Ogt41w9WQaVYlkgCRQ98asreZGrj4xPF-SzOW55I8b2kzlQ3INtDMIw/w1200-h630-p-k-no-nu/skyler-white-anna-gunn-2.jpg",
  },

   {
    id: 6,
    name: "Skyler White",
    nickname: "Sky",
    image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj5wiDUTqWk8r5ULwqiGMfJqkkXzMTPEOON1mSTZIMHJXZijiP4bP50HZ_JKaotpkctu7XSCHjEZHARhPHqQT6_Ogt41w9WQaVYlkgCRQ98asreZGrj4xPF-SzOW55I8b2kzlQ3INtDMIw/w1200-h630-p-k-no-nu/skyler-white-anna-gunn-2.jpg",
  },

   {
    id: 6,
    name: "Skyler White",
    nickname: "Sky",
    image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj5wiDUTqWk8r5ULwqiGMfJqkkXzMTPEOON1mSTZIMHJXZijiP4bP50HZ_JKaotpkctu7XSCHjEZHARhPHqQT6_Ogt41w9WQaVYlkgCRQ98asreZGrj4xPF-SzOW55I8b2kzlQ3INtDMIw/w1200-h630-p-k-no-nu/skyler-white-anna-gunn-2.jpg",
  },

   {
    id: 6,
    name: "Skyler White",
    nickname: "Sky",
    image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj5wiDUTqWk8r5ULwqiGMfJqkkXzMTPEOON1mSTZIMHJXZijiP4bP50HZ_JKaotpkctu7XSCHjEZHARhPHqQT6_Ogt41w9WQaVYlkgCRQ98asreZGrj4xPF-SzOW55I8b2kzlQ3INtDMIw/w1200-h630-p-k-no-nu/skyler-white-anna-gunn-2.jpg",
  },
  ];

  const [favorites, setFavorites] = useState<number[]>([]);

  const toggleFavorite = (id: number) => {
    if (favorites.includes(id)) {
      setFavorites(favorites.filter(fav => fav !== id));
    } else {
      setFavorites([...favorites, id]);
    }
  };

  return (
    <div className={styles.grid}>
      {characters.map(char => (
        <div key={char.id} className={styles.card}>
          <img src={char.image} alt={char.name} className={styles.image} />
          <div className={styles.info}>
            <h3 className={styles.name}>{char.name}</h3>
            <p className={styles.nickname}>{char.nickname}</p>
            <div className={styles.actions}>
              <button
                className={`${styles.favorite} ${favorites.includes(char.id) ? styles.active : ""}`}
                onClick={() => toggleFavorite(char.id)}
              >
                {favorites.includes(char.id) ? "★ Favorito" : "☆ Favorito"}
              </button>
              <button className={styles.moreInfo}>Mais Info</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
