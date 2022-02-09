import axios from "axios";
import { useState, useEffect } from "react";
import Logo from "../img/Vinted-logo.svg.png";
import Banner from "../img/banner.jpg";
import Thetest from "../components/Thetest";

const Home = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "https://lereacteur-vinted-api.herokuapp.com/offers"
      );
      console.log(response.data);
      setData(response.data);
      setIsLoading(false);
    };
    fetchData();
  }, []);

  return isLoading ? (
    <p>ça load</p>
  ) : (
    // IL FAUDRA MAPER SUR LE TABLEAU ICI

    <div>
      <div></div>
      <header className="header">
        <img className="logo" src={Logo} alt="" />
        <div className="ensembleButtons">
          <button>S'inscrire</button>
          <button>Se connecter</button>
        </div>
        <button>vends tes articles</button>
      </header>
      <main></main>
      <div>
        <img className="banner" src={Banner} alt="" />
      </div>
      <div>
        <span>Articles Populaires</span>
        <div className="cadresOffers">
          {data.offers.map((item, index) => {
            return <Thetest key={index} item={item}></Thetest>;
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
