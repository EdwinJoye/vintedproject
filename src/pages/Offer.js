import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Offer = () => {
  const { id } = useParams();
  const [data, setData] = useState();
  const [isLoading, setIsloading] = useState(true);

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
    <div>
      <div className="ensembleOffer">
        <div className="cadreOffer">
          <div className="divPicture">
            <img
              className="pictures"
              src={data.product_image.secure_url}
              alt="pictures"
            />
          </div>
          <div>{data.product_price}</div>
          <div>{data.owner.account.username}</div>
        </div>
      </div>
    </div>
  );
};
export default Offer;
