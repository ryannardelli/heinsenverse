import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import styles from "./styles.module.css";
import { auth, googleProvider, signInWithEmailAndPassword, signInWithPopup } from "../../utils/firebaseConfig";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Login com email e senha
  const handleLogin = async (e) => {
    e.preventDefault(); // previne reload da página
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      console.log("Usuário logado com email:", user);
      // redirecionar ou atualizar state global
    } catch (error) {
      console.error("Erro no login com email:", error.message);
      alert("Erro no login: " + error.message);
    }
  };

  // Login com Google
  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;
      console.log("Usuário logado com Google:", user);
      // redirecionar ou atualizar state global
    } catch (error) {
      console.error("Erro no login com Google:", error.message);
      alert("Erro no login com Google: " + error.message);
    }
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
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Senha"
            required
            className={styles.input}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
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
