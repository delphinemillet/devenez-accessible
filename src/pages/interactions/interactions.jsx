import React from 'react'
import './styles.css'

const logClick = e => {
  // if(e.type === 'click' || e.keyCode === 13)
  console.log(`${e.target.id} cliqué !`)
}
const list = ["React", "Vue", "Angular"]
const Interactions = () => (
  <div>
    <h1 className="center">Interactions</h1>
    <div className="column">
      <div className="row">
        <button
          onClick={logClick}
          id="bouton 1"
          className="interaction-button"
        >
          Clique !
        </button>
        <br />
        {/*
          Un handler sur un élément statique empêche la navigation
          au clavier. La possibilité d'intéragir avec l'élément ne
          sera pas vocalisée.
        */}
        <div id="bouton 2"
          onClick={logClick}
          className="interaction-button"
        >
          Clique !
        </div>
        <br />
        {/* 
          Une ancre sans href empêche la navigation au clavier.
          L'utilisateur d'un lecteur d'écran s'attend à naviguer
          vers une autre page.
        */}
        <a
          id="bouton 3"
          onClick={logClick}
          className="interaction-button"
        >
          Clique !
        </a>
      </div>
      <p>
        {`TouraineTech : La conférence technique en région Centre sur les
        nouvelles technologies du numérique. Rendez-vous sur `}
        {/*
          Eviter de faire vocaliser une url.
          Prévenir l'utilisateur si le lien ouvre un nouvel onglet.
        */}
        <a
          href="https://touraine.tech/"
          target="_blank"
        >
          https://touraine.tech
        </a>
        {` pour plus d'informations !`}
      </p>
      <ul>
        {list.map(item => (
          <li key={item}>
            <span className="doc">{item}</span>
            {/* 
              Les icones utilisées comme bouton doivent etre
              accessibles au clavier
            */}
            {/* <button className="icon" onClick={logClick} id={item}> */}
              {/*
                Donner aux boutons-icones un texte alternatif pour
                que le lecteur écran vocalise l'action effectuée
                par le bouton.
              */}
              <span onClick={logClick} id={item}>🗑️</span>
            {/* </button> */}
          </li>
        ))}
      </ul>
    </div>
  </div>
)

export default Interactions