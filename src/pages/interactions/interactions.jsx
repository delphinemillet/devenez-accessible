import React from 'react'
import './styles.css'

const logClick = (e) => console.log(`${e.target.id} cliqué !`)

const Interactions = () => (
  <div>
    <h1 className="center">Interactions</h1>
    <div className="column">
      <div className="row">
        <button id="bouton 1" onClick={logClick} className="interaction-button">Clique !</button>
        <br />
        {/*
          Un handler sur un élément statique empêche la navigation au clavier.
          La possibilité d'intéragir avec l'élément ne sera pas vocalisée.
        */}
        <div id="bouton 2" onClick={logClick} className="interaction-button">Clique !</div>
        <br />
        {/* 
          Une ancre sans href empêche la navigation au clavier.
          L'utilisateur d'un lecteur d'écran s'attend à naviguer vers une autre page.
        */}
        <a id="bouton 3" onClick={logClick} className="interaction-button">Clique !</a>
      </div>
      <p>
        {`TouraineTech : La conférence technique en région Centre sur les nouvelles technologies du numérique. `}
        {`Rendez-vous sur `}
        {/*
          Eviter de faire vocaliser une url.
          Prévenir l'utilisateur si le lien ouvre un nouvel onglet.
        */}
        <a
          href="https://touraine.tech/"
          target="_blank"
          className="no-deco"
        >
          https://touraine.tech
        </a> 
        {` pour plus d'informations !`}
      </p>
    </div>
  </div>
)

export default Interactions