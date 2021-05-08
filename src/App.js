import React from "react"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css";

import AddCliente from "./components/clientes/add-cliente"
import Cliente from "./components/clientes/cliente"
import ClienteList from "./components/clientes/clientes"

function App() {
  return (
    <Router>
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <a href="/clientes" className="navbar-brand">
          vitto
        </a>
        <div className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to={"/clientes"} className="nav-link">
              Clientes Vitto
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/novo/cliente"} className="nav-link">
              Add
            </Link>
          </li>
        </div>
      </nav>

      <div className="container mt-3">
        <Switch>
          <Route exact path={["/", "/clientes"]} component={ClienteList} />
          <Route exact path="/novo/cliente" component={AddCliente} />
          <Route path="/cliente/:id" component={Cliente} />
        </Switch>
      </div>
    </Router>
  )
}

export default App;
