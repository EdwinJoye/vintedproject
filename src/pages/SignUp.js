const SignUp = ({ index }) => {
  return (
    <div className="signupEnsemble">
      <div className="signupCard">
        <h1 className="titrecard">S'inscrire</h1>
        <input className="inputcard" type="text" value="Nom de l'utilisateur" />
        <input className="inputcard" type="email" value="Email" />
        <input
          className="inputcard"
          type="text"
          id="Password"
          value="Mot de passe"
        />
        <div className="checkBoxTitre">
          <input className="inputcheckbox" type="checkbox" />
          <h2 className="titreH2">S'inscrire à notre newsletter</h2>
        </div>
        <p className="texteSignUp">
          En m'inscrivant je confirme avoir lu et accepté les Termes &
          Contitions et Politique de Confidentialité de Vinted. Je confirme
          avoir au moins 18 ans
        </p>
        <button className="buttonSinscrire">S'inscrire</button>
      </div>
    </div>
  );
};

export default SignUp;
