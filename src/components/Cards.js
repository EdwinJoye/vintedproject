import { Link } from "react-router-dom";

const Cards = ({ item }) => {
  return (
    <div>
      <Link to={`/offer/${item._id}`}>
        {" "}
        <div className="cadreOffer">
          <div className="ensembleLogoNom">
            {item.owner.account.avatar && (
              <img
                className="logoCard"
                src={item.owner.account.avatar.secure_url}
                alt="logoCard"
              />
            )}

            <div className="nomCard">{item.owner.account.username}</div>
          </div>
          <div className="divPicture">
            <img
              className="pictures"
              src={item.product_image.secure_url}
              alt="pictures"
            />
          </div>
          <div className="ensemblePricePopular">
            <div className="priceCard">{item.product_price}</div>
            <div className="popularCard">popular</div>
          </div>
          <div>Taille</div>
          <div>{item.product_details.marque}</div>
        </div>
      </Link>
    </div>
  );
};

export default Cards;
