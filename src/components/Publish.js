import axios from "axios";
import React, { useState } from "react";
import { Navigate } from "react-router-dom";

const Publish = ({ token }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(1);
  const [condition, setCondition] = useState("");
  const [city, setCity] = useState("");
  const [brand, setBrand] = useState("");
  const [size, setSize] = useState("");
  const [color, setColor] = useState("");
  const [picture, setPicture] = useState();
  const [data, setData] = useState();
  const [isLoading, setIsloading] = useState(false);

  const handleSubmit = async (event) => {
    try {
      console.log(token);
      event.preventDefault();
      setIsloading(true);

      const data = new FormData();
      data.append("title", title);
      data.append("description", description);
      data.append("price", price);
      data.append("condition", condition);
      data.append("city", city);
      data.append("brand", brand);
      data.append("size", size);
      data.append("color", color);
      data.append("picture", picture);

      const response = await axios.post(
        "https://lereacteur-vinted-api.herokuapp.com/offer/publish",
        data,
        {
          headers: {
            authorization: `Bearer ${token}`,
          },
        }
      );
      setData(response.data);
      setIsloading(false);
    } catch (error) {
      console.log(error.message);
    }
  };
  return token ? (
    <div className="container backgroundPublish ">
      <h1 className="titrePublish">Vends ton article</h1>

      <form onSubmit={handleSubmit}>
        <div className="ensembleBox">
          <div className="boxAjouteUnePhoto">
            {" "}
            <div>
              <label className="buttonAjouterUnePhoto" htmlFor="file">
                {" "}
                + Ajouter une photo
              </label>
            </div>
            <input
              style={{ display: "none" }}
              id="file"
              type="file"
              onChange={(event) => setPicture(event.target.files[0])}
            />
          </div>
        </div>

        <div className="ensemnleBoxTitresInputs1">
          <div className="boxTitresInputsTitre">
            <h1 className="titresPublish">Titre</h1>
            <input
              className="inputsPublish"
              type="text"
              placeholder="ex: Chemise Sézanne verte"
              onChange={(event) => setTitle(event.target.value)}
            />
          </div>
          <div className="boxTitreImputsDécris">
            <h1 className="titresPrixDécrit">Décris ton article</h1>
            <textarea
              className="inputsPublish"
              name=""
              id=""
              cols="30"
              rows="10"
              placeholder="description"
            ></textarea>
          </div>
        </div>
        <div className="ensemnleBoxTitresInputs2">
          <div className="boxTitresInputs">
            <h1 className="titresPublish">Marque</h1>
            <input
              className="inputsPublish"
              type="text"
              placeholder="ex: Zara"
              onChange={(event) => setBrand(event.target.value)}
            />
          </div>
          <div className="boxTitresInputs">
            <h1 className="titresPublish">Taille</h1>
            <input
              className="inputsPublish"
              type="text"
              placeholder="ex: L / 40 /12"
              onChange={(event) => setSize(event.target.value)}
            />
          </div>
          <div className="boxTitresInputs">
            <h1 className="titresPublish">Couleur</h1>
            <input
              className="inputsPublish"
              type="text"
              placeholder="ex: Fushia"
              onChange={(event) => setColor(event.target.value)}
            />
          </div>
          <div className="boxTitresInputs">
            <h1 className="titresPublish">Etat</h1>
            <input
              className="inputsPublish"
              type="text"
              placeholder="ex: Neuf avec étiquette"
              onChange={(event) => setCondition(event.target.value)}
            />
          </div>
          <div className="boxTitresInputs">
            <h1 className="titresPublish">Lieu</h1>
            <input
              className="inputsPublish"
              type="text"
              placeholder="ex: Paris"
              onChange={(event) => setCity(event.target.value)}
            />
          </div>
          <div className="boxPrix">
            <h1 className="titresPrixPublish">Prix</h1>
            <input
              className="inputsPublish"
              type="number"
              placeholder="0.00 €"
              onChange={(event) => setPrice(event.target.value)}
            />
          </div>
          <div className="boxbuttonSubmitPublish">
            <input
              className="buttonAjouterPublish"
              type="submit"
              value={"Ajouter"}
            />
          </div>
        </div>
      </form>
    </div>
  ) : (
    <Navigate to="/login"></Navigate>
  );
};

export default Publish;
