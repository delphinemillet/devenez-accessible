import React from 'react'
import Modal from '../../components/modal'
import './styles.css'

class Modale extends React.Component {
  state = {
    show: false,
    list: ["Avocat", "Riz", "Lentilles", "Lait de coco"]
  }

  toggle = (item) => {
    this.setState({ show: !this.state.show, selected: item })
  }

  render() {
    const { show, list, selected } = this.state
    return (
      <div className="center">
        <h1>Modale</h1>
        <h2>Liste de courses</h2>
        <div>
          <ul className="modal-list">
            {list.map(item => (
              <li key={item}>
                <span className="doc">{item}</span>
                {/* l'élément ouvrant une modale doit être contrôlable au clavier */}
                <button className="button" onClick={() => this.toggle(item)} id={`button-${item}`}>Supprimer</button>
              </li>
            ))}
          </ul>
        </div>
        {show && <Modal toggle={this.toggle} selected={selected} />}
      </div>
    )
  }
}

export default Modale