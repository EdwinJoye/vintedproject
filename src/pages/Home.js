import axios from "axios";
import { useState, useEffect } from "react";
import Banner from "../img/banner.jpg";
import Cards from "../components/Cards";

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
    <p>En cours de chargement ...</p>
  ) : (
    // IL FAUDRA MAPER SUR LE TABLEAU ICI

    <div>
      <div>
        <img className="banner" src={Banner} alt="" />
      </div>
      <div>
        <span className="titre">Articles Populaires</span>
        <div className="cadresOffers container">
          {data.offers.map((item, index) => {
            return (
              <div className="container">
                <Cards item={item} key={index}></Cards>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
