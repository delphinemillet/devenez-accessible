import React from 'react'

import logo from './img/logo.png'
import decorative from './img/decorative.jpg'
import meaningful from './img/meaningful.jpg'
import './styles.css'

const Images = () => (
  <div>
    <h1 className="center">Images</h1>
    <div className="column">
      {/* alternative textuelle au logo : nom de la marque */}
      <div>Powered by <img src={logo} className="logo" /></div>

      <div>
        {/* laisser vide l'attribut alt pour les images purement décoratives */}
        <img src={decorative} className="image" />

        {/* décrire le contexte / le contenu / le sentiment véhiculé par l'image
            si elle apporte de l'information
        */}
        <img src={meaningful} className="image" />
      </div>
    </div>
  </div>
)

export default Images