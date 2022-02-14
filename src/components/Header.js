import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../img/Vinted-logo.svg.png";

const Header = ({ token, setUser }) => {
  const [data, setData] = useState();
  const [isLoading, setIsloading] = useState(true);

  // const router = express.Router();
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

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const response = await axios.get(
  //       `https://lereacteur-vinted-api.herokuapp.com/offers${product_name}`
  //     );
  //     setData(response.data);
  //     setIsloading(false);
  //   };
  //   fetchData();
  // }, [product_name]);

  return token ? (
    <div>
      <header className="header container">
        <div className="ensembleLogoSearch">
          <img className="logo" src={Logo} alt="" onClick={handleHome} />
          <input
            className="searchButton"
            type="search"
            placeholder="Recherche des articles"
          />{" "}
        </div>{" "}
        <div className="ensembleButtons">
          <button
            className="buttonDeconnecter "
            onClick={() => {
              setUser(null);
              navigate("/");
            }}
          >
            Se déconnecter
          </button>
          <button className="buttonVends">Vends tes articles</button>
        </div>
      </header>
    </div>
  ) : (
    <div>
      <header className="header container">
        <div className="ensembleLogoSearch">
          <img className="logo" src={Logo} alt="" onClick={handleHome} />
          <div>
            <input
              className="searchButton"
              type="search"
              placeholder="Recherche des articles"
              onChange={(searchValue) => {
                console.log(searchValue);
                const response = axios
                  .get(
                    `https://lereacteur-vinted-api.herokuapp.com/offer?title=${searchValue}`
                  )
                  .then((data) => {
                    console.log("data", data);
                    setData(response.data);
                  });
              }}
            />{" "}
            <div>
              <p>Triez par prix</p>
              <div></div>
              <div></div>
            </div>
          </div>
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
