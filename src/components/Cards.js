import { Link } from "react-router-dom";

const Cards = ({ item }) => {
  return (
    <div className="container">
      <Link to={`/offer/${item._id}`} className="cadreOffer">
        {" "}
        <div>
          <div>
            <div className="nomUser ">{item.owner.account.username}</div>
            <img src="" alt="" />
          </div>

          <img
            className="pictures"
            src={item.product_image.secure_url}
            alt=""
          />
          <div>
            <div>{item.product_price}</div>
            <div>coeur</div>
          </div>
          <div>Taille</div>
          <div>{item.product_details.marque}</div>
        </div>
      </Link>
    </div>
  );
};

export default Cards;
