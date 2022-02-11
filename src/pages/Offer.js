import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const Offer = () => {
  const { id } = useParams();
  const [data, setData] = useState();
  const [isLoading, setIsloading] = useState(true);
  const navigate = useNavigate();

  const handleAchat = () => {
    navigate("/achat");
  };
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `https://lereacteur-vinted-api.herokuapp.com/offer/${id}`
      );
      console.log(response.data);
      setData(response.data);
      setIsloading(false);
    };
    fetchData();
  }, [id]);

  return isLoading ? (
    <p>En cours de chargement ...</p>
  ) : (
    <div className="ensemblePageOffer">
      <div className="carréPageOffer container">
        <img
          className="picturePageOffer"
          src={data.product_image.secure_url}
          alt="pictures"
        />
        <div className="ensembleInfosPageOffer">
          <div className="pricePageOffer">{data.product_price} €</div>
          <div>
            <div>
              {data.product_details.map((item, index) => {
                const keys = Object.keys(item); // ["MARQUE"]
                return (
                  <div className="ensembleDetails2" key={index}>
                    <span className="ensembleTitreDetails">{keys[0]}</span>
                    <span className="ensembeDetails">{item[keys[0]]}</span>
                  </div>
                );
              })}
            </div>
            <div>
              {" "}
              <div className="ensembleDetails1"></div>
            </div>
            <div>
              <div className="productNamePageOffer"> {data.product_name}</div>
              <div className="productDescriptionPageOffer">
                {data.product_description}
              </div>
              <div className="ensembleLogoNomPageOffer ">
                <img
                  className="logoCard"
                  src={data.owner.account.avatar.secure_url}
                  alt="logoCard"
                />
                <div>{data.owner.account.username}</div>
              </div>
              <div className="buttonAcheterPageOfferCadre">
                <button
                  className="buttonAcheterPageOffer"
                  onClick={handleAchat}
                >
                  Acheter
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Offer;
