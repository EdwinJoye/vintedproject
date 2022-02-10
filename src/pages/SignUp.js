import { useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";

const SignUp = () => {
  const [isLoading, setIsloading] = useState(true);
  const obj = {};

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(obj);
    const response = await axios.post(
      " https://lereacteur-vinted-api.herokuapp.com/user/signup",
      obj
    );
    Cookies.set("myCookies", response.data.token);
    console.log(response.data);
  };

  return !isLoading ? (
    <p>En cours de chargement ...</p>
  ) : (
    <div className="signupEnsemble">
      <div className="signupCard">
        <h1 className="titrecard">S'inscrire</h1>

        <form onSubmit={handleSubmit}>
          <input
            onChange={(event) => {
              obj.username = event.target.value;
            }}
            className="inputcard"
            type="text"
            placeholder="Nom de l'utilisateur"
          />
          <input
            onChange={(event) => {
              obj.email = event.target.value;
            }}
            className="inputcard"
            type="email"
            placeholder="Email"
          />
          <input
            onChange={(event) => {
              obj.password = event.target.value;
            }}
            className="inputcard"
            type="password"
            placeholder="Mot de passe"
          />
          <div className="checkBoxTitre">
            <input className="inputcheckbox" type="checkbox" />
            <h2 className="titreH2">S'inscrire à notre newsletter</h2>
          </div>
          <p className="texteSignUp">
            En m'inscrivant je confirme avoir lu et accepté les Termes &
            Contitions et Politique de Confidentialité de Vinted. Je confirme
            avoir au moins 18 ans
          </p>
          <button type="submit" className="buttonSinscrire">
            S'inscrire
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
