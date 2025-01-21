import { useState, useEffect } from "react";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../services/firebaseConfig";
import "./register.css";

export function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  useEffect(() => {
    if (user) {
      navigate("/tasks");
    }
  }, [user, navigate]);

  const handleSignUp = async (e) => {
    e.preventDefault();
    setErrorMessage("");

    try {
      await createUserWithEmailAndPassword(email, password);
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  if (loading) {
    return <p>Carregando...</p>;
  }

  return (
    <div className="register-overlay">
      <div className="register-container">
        <h1 className="register-title">CADASTRO</h1>
        <header className="register-header">
          <span>Por favor, digite suas informações de cadastro</span>
        </header>

        <form>
          <div className="register-inputContainer">
            <label htmlFor="email">E-mail</label>
            <input
              type="text"
              name="email"
              id="email"
              placeholder=" seuemail@gmail.com"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="register-inputContainer">
            <label htmlFor="password">Senha</label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder=" **********"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {errorMessage && <p className="register-error">{errorMessage}</p>}
          <button onClick={handleSignUp} className="register-button">
            CADASTRAR
          </button>
          <div className="register-footer">
            <p>Você já tem uma conta?</p>
            <Link to="/login">Acesse sua conta aqui</Link>
          </div>
        </form>
      </div>
    </div>
  );
}
