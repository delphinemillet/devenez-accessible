import React from 'react'
import './styles.css'

class Formulaires extends React.Component {
  state = {
    errors: {},
    send: false
  }

  // placer le focus sur le texte affiché suite à une action de l'utilisateur
  componentDidUpdate = () => {
    document.getElementById("send").focus()
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const prenom = document.getElementById("prenom").value
    if (prenom === 'del') this.setState({
      errors: { prenom: 'Ce pseudo est déjà pris' }
    })
    else {
      this.setState({ send: true })
      const send = document.getElementById("send")
      if(send !== null) send.focus()
    }
  }

  render() {
    const { errors, send } = this.state
    return (
      <div className="formulaire">
        <h1 className="title">Formulaires</h1>
        <form className="column" onSubmit={this.handleSubmit}>
          <div>
            {/* Le placeholder ne permet pas à l'utilisateur d'un lecteur d'écran de savoir ce qu'il faut saisir.
                Utiliser l'attribut aria-invalid permet de lui indiquer que le champ est invalide.
            */}
            <input
              type="text"
              placeholder="Pseudo"
              id="prenom"
              className={errors.prenom ? 'error' : ''}
              aria-describedby="error-name"
              required
            />
            {/* 
                La couleur n'est pas un vecteur suffisant pour indiquer une erreur.
                Lier le texte d'erreur à la description de l'input lorsque le champ est invalide. 
             */}
            {errors.prenom && <div id="error-name" className="error">{errors.prenom}</div>}
          </div>
          <div>
            <div>Il fait beau aujourd'hui.</div>
            <div>
              <input type="radio" value="oui" name="meteo" />
              <label>Vrai</label>
            </div>
            <div>
              <input type="radio" value="non" name="meteo" />
              <label>Faux</label>
            </div>
          </div>
          <input type="submit" value="Envoyer" className="button" />
        </form>
        {/* le tabIndex sert seulement pour la démo */}
        {send && <p id="send" tabIndex="0">Formulaire envoyé !</p>}
      </div>
    )
  }
}

export default Formulaires