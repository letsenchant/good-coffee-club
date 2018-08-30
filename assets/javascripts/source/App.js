import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import HomePage from './components/pages/HomePage'
import NotFoundPage from './components/pages/NotFoundPage'

export default class App extends React.Component {
  render() {
    console.log("Rendering App...")
    return (
      <BrowserRouter>
        <Switch>
          <Route path='/' component={HomePage} />
          <Route component={NotFoundPage} />
        </Switch>
      </BrowserRouter>
    )
  }
}
