import React from "react"
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import Portfolio from './pages/Portfolio'
import Settings from './pages/Settings'
import Sidebar from './components/Sidebar'

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom"

import './App.css'

const App = () => {
  return (
    <Router>
      <div style={{display: 'flex', background: '#e8e8e8'}}>
        
        <Sidebar />

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/portfolio">
            <Portfolio />
          </Route>
          <Route path="/settings">
            <Settings />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App