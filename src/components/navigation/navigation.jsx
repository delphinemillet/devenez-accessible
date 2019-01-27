import React from "react"
import { NavLink } from "react-router-dom"
import { routes } from "../../routes"
import './styles.css'

const Navigation = () => (
  <nav className="navigation">
    <ul className="list">
      {
        routes.map(({ path, title, exact }) => (
          <li className="item" key={path}>
            <NavLink className="link" to={path} exact={exact} tabIndex="-1">{title}</NavLink>
          </li>
        ))
      }
    </ul>
  </nav>
)

export default Navigation