// import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../img/Vinted-logo.svg.png";

const Header = ({ token, setUser, setSearchBar }) => {
  const navigate = useNavigate();

  return token ? (
    <div>
      <header className="header container">
        <div className="ensembleLogoSearch">
          <Link to="/">
            {" "}
            <img className="logo" src={Logo} alt="" />
          </Link>
          <input
            className="searchButton"
            type="text"
            placeholder="Recherche des articles"
            onChange={(event) => {
              console.log(event.target.value);
              setSearchBar(event.target.value);
            }}
          />
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
          <Link to="/publish">
            {" "}
            <button className="buttonVends">Vends tes articles</button>
          </Link>
        </div>
      </header>
    </div>
  ) : (
    <div>
      <header className="header container">
        <div className="ensembleLogoSearch">
          <Link to="/">
            <img className="logo" src={Logo} alt="" />{" "}
          </Link>

          <div>
            <input
              className="searchButton"
              type="text"
              placeholder="Recherche des articles"
              onChange={(event) => {
                console.log(event.target.value);
                setSearchBar(event.target.value);
              }}
            />
            <div>
              <p>Trier par prix</p>
              <div></div>
              <div></div>
            </div>
          </div>
        </div>
        <div className="ensembleButtons">
          <Link to="/signup">
            {" "}
            <button className="buttonUnique">S'inscrire</button>{" "}
          </Link>

          <Link to="/login">
            {" "}
            <button className="buttonUnique">Se connecter</button>{" "}
          </Link>
          <Link to="/login">
            <button className="buttonVends">Vends tes articles</button>{" "}
          </Link>
        </div>
      </header>
    </div>
  );
};

export default Header;
