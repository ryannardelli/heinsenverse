import Heading from "../Heading";
import styles from "./styles.module.css";

export function AboutComponent() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <Heading>Sobre o Heinsenverse</Heading>
        <p className={styles.subtitle}>
          Explore o universo de Breaking Bad de forma interativa, conhecendo personagens, episódios e curiosidades da série que marcou gerações.
        </p>
      </header>

      <section className={styles.content}>
        <article className={styles.textSection}>
          <Heading>História</Heading>
          <p>
            "Breaking Bad" é uma aclamada série de televisão americana criada por Vince Gilligan. 
            A narrativa acompanha Walter White, um professor de química que, ao ser diagnosticado com câncer, 
            mergulha no mundo do crime ao produzir metanfetamina para garantir o futuro de sua família. 
            A série se destaca pelas reviravoltas, dilemas morais e exploração profunda da natureza humana.
          </p>
        </article>

        <article className={styles.textSection}>
          <Heading>Personagens Principais</Heading>
          <ul>
            <li><strong>Walter White:</strong> O protagonista, cuja transformação de professor a criminoso é o centro da trama.</li>
            <li><strong>Jesse Pinkman:</strong> Ex-aluno de Walter e parceiro na produção de metanfetamina.</li>
            <li><strong>Saul Goodman:</strong> Advogado carismático, especialista em situações complicadas.</li>
            <li><strong>Skyler White:</strong> Esposa de Walter, envolvida nas decisões familiares e nos desafios do negócio ilícito.</li>
          </ul>
        </article>

        <article className={styles.textSection}>
          <Heading>Sobre o Heinsenverse</Heading>
          <p>
            O <strong>Heinsenverse</strong> é um projeto criado por <strong>Ryan Nardelli</strong> para proporcionar aos fãs uma experiência completa no universo de Breaking Bad. 
            Com informações sobre personagens, episódios e curiosidades, o objetivo é unir entretenimento e informação de forma interativa e acessível.
          </p>
        </article>
      </section>

      <footer className={styles.footer}>
        <p>© 2025 Ryan Nardelli - Heinsenverse</p>
      </footer>
    </div>
  );
}