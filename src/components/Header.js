import { useNavigate } from "react-router-dom";
import Logo from "../img/Vinted-logo.svg.png";

const Header = ({ item }) => {
  const navigate = useNavigate();
  navigate("/signup");

  return (
    <div>
      <header className="header container">
        <img className="logo" src={Logo} alt="" />
        <div className="ensembleButtons">
          <button onClick={navigate}>S'inscrire</button>
          <button>Se connecter</button>
        </div>
        <button>vends tes articles</button>
      </header>
    </div>
  );
};

export default Header;
