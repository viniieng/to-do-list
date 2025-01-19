import { Link, Navigate } from "react-router-dom";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useState } from "react";
import { auth } from "../../services/firebaseConfig";
import styles from "./login.module.css";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  function handleSignIn(e) {
    e.preventDefault();
    signInWithEmailAndPassword(email, password);
  }

  if (loading) {
    return <p>carregando...</p>;
  }
  if (user) {
    return <Navigate to="/tasks" />;
  }

  return (
    <div className={styles.overlay}>
      <div className={styles.container}>
        <div className={styles.modal}>
          <div className={styles.title}>
            <h1>LOGIN</h1>
          </div>
          <header className={styles.header}>
            <span>Por favor, digite suas informações de login</span>
          </header>

          <form onSubmit={handleSignIn}>
            <div className={styles.inputContainer}>
              <label htmlFor="email">E-mail</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder=" seuemail@gmail.com"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className={styles.inputContainer}>
              <label htmlFor="password">Senha</label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder=" **********"
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <button className={styles.button} type="submit">
              ENTRAR
            </button>
            <div className={styles.footer}>
              <p>Você não tem uma conta?</p>
              <Link to="/register">Crie a sua conta aqui</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
