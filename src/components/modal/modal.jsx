import React from 'react'
import './styles.css'

class Modale extends React.Component {
  componentDidMount() {
    // placer le focus sur la modale à son ouverture pour qu'elle soit vocalisée
    document.getElementById("modale").focus()
    // document.addEventListener('keydown', this.trapFocus)
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.trapFocus)
    // A la fermeture de la modale, placer le focus sur l'element ayant permis son ouverture
    // document.getElementById(`button-${this.props.selected}`).focus()
  }

  // Capturer le focus dans la modale pour la navigation au clavier
  // Permettre la sortie de la modale via la touche Echap
  trapFocus = (e) => {
    // Esc -> quitter la modale
    if (e.keyCode === 27) return this.props.toggle()

    if (e.keyCode !== 9) return

    // Shift + Tab (en arrière) sur le premier element -> focus le dernier element
    if (e.shiftKey) {
      if (document.activeElement === document.getElementById("close")) {
        document.getElementById("confirmer").focus()
        e.preventDefault()
      }
    }
    // Tab (en avant) sur le dernier element -> focus le premier element
    else {
      if (document.activeElement === document.getElementById("confirmer")) {
        document.getElementById("close").focus()
        e.preventDefault()
      }
    }
  }

  render() {
    const { toggle, selected } = this.props
    return (
      <div className="modal">
        {/*
          Ajouter le role dialog sur une modale et lui donner un titre
          pour donner du contexte à l'utilisateur d'un lecteur d'écran.
        */}
        <div aria-labelledby="titre" className="modal-content" id="modale" tabIndex="0">
          <button
            id="close"
            onClick={toggle}
            className="close"
          >
            X
          </button>
          <h1 id="titre">Supprimer l'élément</h1>
          <div>
            <p>La suppression de cet élément est définitive.</p>
            <p>Etes-vous sur de vouloir supprimer l'élément <strong>{selected}</strong> ?</p>
          </div>
          <div className="modal-buttons-container">
            <button type="button" className="button flat" onClick={toggle}>Annuler</button>
            <button id="confirmer" type="button" className="button" onClick={toggle}>Confirmer</button>
          </div>
        </div>
      </div>
    )
  }
}

export default Modale