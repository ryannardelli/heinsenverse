import { FcGoogle } from 'react-icons/fc';
import styles from './styles.module.css';

const Login = () => {
  const handleGoogleLogin = () => {
    // Aqui você pode integrar com Firebase ou OAuth
    alert("Login com Google clicado!");
  };

  const handleLogin = (e) => {
    e.preventDefault();
    // Aqui você processaria o login com email/senha
    alert("Login com email/senha");
  };

  return (
    <div className={styles.container}>
      <div className={styles.loginBox}>
        <h2>Login</h2>
        <form onSubmit={handleLogin} className={styles.form}>
          <input
            type="email"
            placeholder="Email"
            required
            className={styles.input}
          />
          <input
            type="password"
            placeholder="Senha"
            required
            className={styles.input}
          />
          <button type="submit" className={styles.loginButton}>
            Entrar
          </button>
        </form>

        <div className={styles.divider}>ou</div>

        <div className={styles.containerAuth}>

        <button className={styles.googleButton} onClick={handleGoogleLogin}>
          <FcGoogle size={18} style={{ marginRight: "8px" }} />
          Entrar com Google
        </button>

        </div>
      </div>
    </div>
  );
};

export default Login;