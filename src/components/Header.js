import { useNavigate } from "react-router-dom";
import Logo from "../img/Vinted-logo.svg.png";

const Header = ({ item }) => {
  const navigate = useNavigate();

  const handleSignUp = () => {
    navigate("/signup");
  };

  const handleLogIn = () => {
    navigate("/login");
  };
  const handleHome = () => {
    navigate("/");
  };
  return (
    <div>
      <header className="header container">
        <div className="ensembleLogoSearch">
          <img className="logo" src={Logo} alt="" onClick={handleHome} />
          <input
            className="searchButton"
            type="search"
            placeholder="Recherche des articles"
          />
        </div>
        <div className="ensembleButtons">
          <button className="buttonUnique" onClick={handleSignUp}>
            S'inscrire
          </button>
          <button className="buttonUnique" onClick={handleLogIn}>
            Se connecter
          </button>
          <button className="buttonVends">Vends tes articles</button>
        </div>
      </header>
    </div>
  );
};

export default Header;
