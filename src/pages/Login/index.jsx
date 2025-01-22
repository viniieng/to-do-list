import { Link, Navigate } from "react-router-dom";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useState, useEffect } from "react";
import { auth } from "../../services/firebaseConfig";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import "./login.css";
import "boxicons";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const [signInWithEmailAndPassword, user, loading, errorFromFirebase] =
    useSignInWithEmailAndPassword(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (errorFromFirebase) {
      setError("Erro ao fazer login");
    }
  }, [errorFromFirebase]);

  function handleSignIn(e) {
    e.preventDefault();
    setError("");
    signInWithEmailAndPassword(email, password);
  }

  function handleGoogleLogin() {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        navigate("/tasks");
      })
      .catch((error) => {});
  }

  if (user) {
    return <Navigate to="/tasks" />;
  }

  return (
    <div className="login-overlay">
      <div className="login-container">
        <div className="login-modal">
          <div className="login-title">
            <h1>LOGIN</h1>
          </div>
          <header className="login-header">
            <span>Por favor, digite suas informações de login</span>
          </header>
          <form onSubmit={handleSignIn}>
            <div className="login-inputContainer">
              <label htmlFor="email">E-mail</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="seuemail@gmail.com"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="login-inputContainer">
              <label htmlFor="password">Senha</label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="**********"
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <button className="login-button" type="submit" disabled={loading}>
              {loading ? (
                <box-icon
                  name="loader-alt"
                  animation="spin"
                  color="white"
                  size="xs"
                ></box-icon>
              ) : (
                "ENTRAR"
              )}
            </button>
          </form>
          <button className="login-button_google" onClick={handleGoogleLogin}>
            <box-icon name="google" type="logo" color="white"></box-icon>
            Login com Google
          </button>
          {error && <p className="error-message">{error}</p>}
          <div className="login-footer">
            <p>Você não tem uma conta?</p>
            <Link to="/register">Crie a sua conta aqui</Link>
          </div>
        </div>
      </div>
    </div>
  );
};
