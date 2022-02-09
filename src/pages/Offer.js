import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import Page2 from "../components/Page2";
import Logo from "../img/Vinted-logo.svg.png";

const Offer = () => {
  //   const { id } = useParams();
  const [data, setData] = useState();
  const [isLoading, setIsloading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "https://lereacteur-vinted-api.herokuapp.com/offer/:id"
      );
      console.log(response.data);
      setData(response.data);
      setIsloading(false);
    };
    fetchData();
  }, []);

  return isLoading ? (
    <p>ça charge</p>
  ) : (
    <div>
      <header className="header">
        <img className="logo" src={Logo} alt="" />
        <div className="ensembleButtons">
          <button>S'inscrire</button>
          <button>Se connecter</button>
        </div>
        <button>vends tes articles</button>
      </header>
      {data.offers.map((item, index) => {
        return <Page2 item={item} key={index}></Page2>;
      })}
    </div>
  );
};
export default Offer;
