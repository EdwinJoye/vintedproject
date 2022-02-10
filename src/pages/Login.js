import { useNavigate } from "react-router-dom";

const Login = ({ index }) => {
  const navigate = useNavigate();
  const handleHome = () => {
    navigate("/");
  };
  return (
    <div className="loginEnsemble">
      <div className="loginCard">
        <h1 className="titrecard">Se connecter</h1>
        <input type="text" placeholder="Adresse email" />
        <input type="password" placeholder="Mot de passe" />
        <button>Se connecter</button>
        <p onClick={handleHome}>Pas encore de compte ? Inscris-toi !</p>
      </div>
    </div>
  );
};
export default Login;
