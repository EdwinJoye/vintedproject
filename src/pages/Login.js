import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const obj = {};
  const handleHome = () => {
    navigate("/");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(obj);
    const response = await axios.post(
      " https://lereacteur-vinted-api.herokuapp.com/user/login",
      obj
    );

    console.log(response.data);
  };

  return (
    <div className="loginEnsemble">
      <div className="loginCard">
        <h1 className="titreLogin">Se connecter</h1>
        <form onSubmit={handleSubmit}>
          <input
            className="inputLogin"
            onChange={(event) => {
              obj.email = event.target.value;
            }}
            type="email"
            placeholder="Adresse email"
          />
          <input
            className="inputLogin"
            onChange={(event) => {
              obj.password = event.target.value;
            }}
            type="password"
            placeholder="Mot de passe"
          />
          <button className="seConnecterButton" type="submit">
            Se connecter
          </button>
        </form>
        <p className="buttonssignup" onClick={handleHome}>
          Pas encore de compte ? Inscris-toi !
        </p>
      </div>
    </div>
  );
};
export default Login;
