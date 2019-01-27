import React from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"
import Navigation from './components/navigation'
import { routes } from './routes'
import './App.css'

const App = () => (
  <Router>
    <div className="container">
      <Navigation />
      <div className="content">
        {
          routes.map(props =>
            <Route key={props.path} {...props} />
          )
        }
      </div>
    </div>
  </Router>
)

export default App