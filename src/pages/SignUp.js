import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newsletter, setNewsletter] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleLogIn = () => {
    console.log(errorMessage);
    navigate("/login");
  };
  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      const response = await axios.post(
        " https://lereacteur-vinted-api.herokuapp.com/user/signup",
        {
          email: email,
          username: username,
          password: password,
          newsletter: newsletter,
        }
      );
      if (response.data.token) {
        setUsername(response.data.token);
        navigate("/");
      }
    } catch (error) {
      console.log("Signup Error ===> ", error.message);
      console.log("Catch error ===> ", error.response);
      if (error.response.status === 409) {
        setErrorMessage("Cet email a déjà un compte");
      }
    }
  };

  return (
    <div className="signupEnsemble">
      <div className="signupCard">
        <h1 className="titrecard">S'inscrire</h1>

        <form onSubmit={handleSubmit}>
          <div className="butonEnsemble">
            <input
              onChange={(event) => setUsername(event.target.value)}
              className="inputcard"
              type="text"
              placeholder="Nom de l'utilisateur"
            />
            <input
              onChange={(event) => setEmail(event.target.value)}
              className="inputcard"
              type="email"
              placeholder="Email"
            />
            <input
              onChange={(event) => setPassword(event.target.value)}
              className="inputcard"
              type="password"
              placeholder="Mot de passe"
            />
          </div>

          <div className="checkBoxTitre">
            <input
              className="inputcheckbox"
              type="checkbox"
              onChange={(event) => setNewsletter(event.target.checked)}
            />
            <h2 className="titreH2">S'inscrire à notre newsletter</h2>
          </div>
          <p className="texteSignUp">
            En m'inscrivant je confirme avoir lu et accepté les Termes &
            Contitions et Politique de Confidentialité de Vinted. Je confirme
            avoir au moins 18 ans
          </p>
          <div className="ensemble">
            <button type="submit" className="buttonSinscrire">
              S'inscrire
            </button>

            <p className="buttonssignup" onClick={handleLogIn}>
              Tu as déjà un compte ? Connecte toi !
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
