import React from 'react'
import './styles.css'

const Couleurs = () => (
  <div className="couleurs container center">
    <h1 className="center">Couleurs</h1>
    <p>
      {`TouraineTech : La conférence technique en région Centre sur les nouvelles technologies du numérique. `}
      {`Rendez-vous sur `}
      <a href="https://touraine.tech/" target="_blank" className="no-deco">https://touraine.tech</a>
      {` pour plus d'informations !`}
    </p>
    <button className="button no-contrast">Voir</button>
  </div>
)

export default Couleurs