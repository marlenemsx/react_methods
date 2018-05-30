import React, { Component } from "react";
class Formulaire extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sexe: "",
      nom: "",
      bio: "",
      email: "",
      cgu: false,
      displayErrorCgu: false
    };
    this.handleNom = this.handleNom.bind(this);
    this.handleNomBlured = this.handleNomBlured.bind(this);
    this.handleBio = this.handleBio.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleNom(e) {
    console.log("je suis changé");
    this.setState({
      nom: e.target.value
    });
  }
  handleNomBlured(e) {
    console.log("je suis quitté");
  }
  handleBio(e) {
    this.setState({
      bio: e.target.value
    });
  }
  handleEmail(e) {
    this.setState({
      email: e.target.value
    });
  }
  handleSubmit(e) {
    e.preventDefault();
    if (this.state.sexe === "") {
      alert("Veuillez cocher un sexe");
    }
    if (this.state.cgu === false) {
      alert("Veuillez cocher les conditions");
    } else {
      this.props.addUser(this.state);
      this.setState({
        displayErrorCgu: false
      });
    }
  }

  render() {
    // error sexe
    let errorSexe = "";
    if (this.state.sexe === "") {
      errorSexe = "Choisir un sexe avant de valider";
    } else {
      errorSexe = "";
    }
    // error Nom
    let errorNom = "";
    if (this.state.nom.length >= 1 && this.state.nom.length <= 3) {
      errorNom = "Votre nom est trop court!";
    } else {
      errorNom = "";
    }
    // error Bio
    let errorBio = "";
    if (
      this.state.bio.length >= 1 &&
      this.state.bio.split(/[=&<'>-_—/{’}«,»[;](.)s\n\r\v\t ]/).length <= 4
    ) {
      errorBio = " Nbres des mots insuffisants";
    } else {
      errorBio = "";
    }
    // error Mail
    let errorEmail = "";
    let a = new RegExp("^[a-zA-Z0-9]+@+[a-zA-Z0-9]+.+[A-z]");
    let regexemail = a.test(this.state.email);
    if (regexemail === false && this.state.email.length >= 1) {
      errorEmail = " erreur email";
    } else {
      errorEmail = "";
    }

    return (
      <form noValidate onSubmit={this.handleSubmit}>
        <h3>Ajouter un utilisateur</h3>
        {/* sexe */}
        {errorSexe !== "" ? (
          <div className="alert alert-danger">{errorSexe}</div>
        ) : null}
        <div className="form-check">
          {/* BOUTON RADIO */}
          <input
            type="radio"
            className="form-check-input"
            name="sexe"
            id="exampleRadios1"
            onChange={e => this.setState({ sexe: e.target.value })}
            value="homme"
          />
          <label className="form-check-label" htmlFor="exampleRadios1">
            Homme
          </label>
          <br />
          <input
            type="radio"
            className="form-check-input"
            name="sexe"
            id="exampleRadios2"
            onChange={e => this.setState({ sexe: e.target.value })}
            value="Femme"
          />
          <label className="form-check-label" htmlFor="exampleRadios2">
            Femme
          </label>
        </div>
        <br />
        <div className="form-input">
          {/* NOM */}
          <label htmlFor="nom">Nom:</label>
          <input
            className="form-control"
            type="text"
            placeholder="Votre nom"
            id="nom"
            required
            onChange={this.handleNom}
            onBlur={this.handleNomBlured}
          />
          {errorNom !== "" ? (
            <div className="alert-danger">{errorNom}</div>
          ) : null}
        </div>
        <div>
          {/* EMAIL */}
          <label htmlFor="email">Email:</label>
          <input
            className="form-control"
            type="email"
            placeholder="Votre email"
            id="email"
            onChange={this.handleEmail}
          />
          {errorEmail !== "" ? (
            <div className="alert alert-warning">{errorEmail}</div>
          ) : null}
        </div>
        <div>
          {/* BIOGRAPHIE */}
          <label htmlFor="bio" />
          <textarea
            required
            className="form-control"
            name="bio"
            id=""
            cols="30"
            rows="10"
            onChange={this.handleBio}
          />
          {errorBio !== "" ? (
            <div className="alert alert-warning">{errorBio}</div>
          ) : null}
        </div>
        {/* conditions générales d'utilisation */}
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            onChange={e => this.setState({ cgu: e.target.checked })}
            id="defaultCheck1"
          />
          <label className="form-check-label" htmlFor="defaultCheck1">
            Conditions générales d'utilisation
          </label>
        </div>
        <br />
        {/* SUBMIT  */}
        <button className="btn btn-primary" type="submit">
          Ajouter
        </button>
      </form>
    );
  }
}

export default Formulaire;
