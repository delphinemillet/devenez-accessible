import React from 'react'
import './styles.css'

class Formulaires extends React.Component {
  state = {
    errors: {},
    created: false
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const prenom = document.getElementById("prenom")
    if (prenom.value === 'del') {
      this.setState({
        errors: { prenom: 'Ce pseudo est déjà pris' }
      })
      /*
        Rajouter la description de l'erreur dans aria-describedby
        pour qu'elle soit vocalisée par le lecteur d'écran
      */
      // prenom.setAttribute('aria-describedby', "error-name")
      /*
        Utiliser l'attribut aria-invalid permet de lui indiquer
        que le champ est invalide.
      */
      // prenom.setAttribute('aria-invalid', true)
      /* Placer le focus sur le premier element en erreur */
      // prenom.focus()
    }
    else this.setState({ created: true, errors: {} })
  }

  // placer le focus sur le texte affiché suite à une action
  // de l'utilisateur
  createdPrint = (element) => {
    // if (element) element.focus()
  }

  render() {
    const { errors, created } = this.state
    return (
      <div className="formulaire">
        <h1 className="center">Formulaires</h1>
        <form className="column" onSubmit={this.handleSubmit}>
          <div>
            {/* Le placeholder ne permet pas à l'utilisateur d'un
                lecteur d'écran de savoir ce qu'il faut saisir.
            */}
            <input
              type="text"
              placeholder="Pseudo"
              id="prenom"
              className={errors.prenom ? 'error' : ''}
              required
              aria-invalid="false"
              onChange={this.handleChange}
            />
            {/* 
                La couleur n'est pas un vecteur suffisant pour indiquer
                une erreur.
                Lier le texte d'erreur à la description de l'input lorsque
                le champ est invalide. 
             */}
            {errors.prenom &&
              <div id="error-name" className="error">
                {errors.prenom}
              </div>
            }
          </div>
          <div>
            <div>Il fait beau aujourd'hui.</div>
            <div>
              <input id="oui" type="radio" value="oui" name="meteo" />
              <label>Vrai</label>
            </div>
            <div>
              <input id="non" type="radio" value="non" name="meteo" />
              <label>Faux</label>
            </div>
          </div>
          <input type="submit" value="Envoyer" className="button" />
        </form>
        {/* le tabIndex sert seulement pour la démo */}
        {created &&
          <p tabIndex="0" ref={this.createdPrint}>
            Compte créé !
          </p>
        }
      </div>
    )
  }
}

export default Formulaires