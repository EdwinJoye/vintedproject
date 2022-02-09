import { Link } from "react-router-dom";

const Thetest = ({ item }) => {
  return (
    <div>
      <Link to={`/offer/${item._id}`} className="cadreOffer">
        <div>
          <div>{item.owner.account.username}</div>
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

export default Thetest;

// <div
//   onClick={<Link to={`/offer/${item._id}`}>Go to product with Link</Link>}
//   className="cadresOffers"
// >
//   <div>
//     {" "}
//     <div className="cadreOffer">
//       <p>{item.product_name}</p>
//       <img
//         className="pictures"
//         src={item.product_image.secure_url}
//         alt=""
//       />
//       <p>{item.product_price}</p>
//       <p>{item.owner.account.username}</p>
//     </div>
//   </div>
// </div>
