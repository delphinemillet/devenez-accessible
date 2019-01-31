import React from 'react'

class Couleurs extends React.Component {
  /* 
    Masquer la décoration des liens ne permet plus des les
    distinguer du contenu d'un texte.
    La couleur n'est pas un vecteur suffisant car non visible
    pour les personnes qui perçoivent mal les couleurs.
  */
  state = {
    colors: {
      text: '#3c3d8b',
      link: 'darkcyan',
      button: '#6abfad'
    },
    decoration: 'none'
  }

  changeColors = () => this.setState({
    decoration: 'underline',
    colors: {
      ...this.state.colors,
      button: 'darkcyan'
    }
  })

  render() {
    const { colors, decoration } = this.state
    return (
      <div className="couleurs container center">
        <h1 className="center">Couleurs</h1>
        <p style={{ color: colors.text }}>
          {`TouraineTech : La conférence technique en région Centre sur les nouvelles technologies du numérique. `}
          {`Rendez-vous sur `}
          <a
            style={{ color: colors.link, textDecoration: decoration }}
            href="https://touraine.tech/"
            target="_blank"
            aria-label="Touraine Tech (nouvel onglet)"
          >https://touraine.tech</a>
          {` pour plus d'informations !`}
        </p>
        <button
          className="button no-contrast"
          style={{ background: colors.button }}
          onClick={this.changeColors}
        >
          Clique !
        </button>
      </div>
    )
  }
}

export default Couleurs