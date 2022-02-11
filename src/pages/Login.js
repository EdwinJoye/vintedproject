import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = ({ setUser }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
  const handleSignUp = () => {
    navigate("/signup");
  };
  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      const response = await axios.post(
        " https://lereacteur-vinted-api.herokuapp.com/user/login",
        { email: email, password: password }
      );
      if (response.data.token) {
        setUser(response.data.token);
        navigate("/");
      }
    } catch (error) {
      console.log(error.message);
      console.log(error.response);
      if (error.response.status === 400 || error.response.status === 401) {
        setErrorMessage("Mauvais email et/ou mot de passe");
      }
    }
  };

  return (
    <div className="loginEnsemble">
      <div className="loginCard">
        <h1 className="titreLogin">Se connecter</h1>
        <form onSubmit={handleSubmit}>
          <input
            className="inputLogin"
            type="email"
            placeholder="Adresse email"
            onChange={(event) => setEmail(event.target.value)}
          />
          <input
            className="inputLogin"
            type="password"
            placeholder="Mot de passe"
            onChange={(event) => setPassword(event.target.value)}
          />
          <button className="seConnecterButton" type="submit">
            Se connecter
          </button>
          <span>{errorMessage}</span>
        </form>
        <p className="buttonssignup" onClick={handleSignUp}>
          Pas encore de compte ? Inscris-toi !
        </p>
      </div>
    </div>
  );
};
export default Login;
