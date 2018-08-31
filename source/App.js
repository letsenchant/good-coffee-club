import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom' // Routing w/ react-router-dom

// State management w/ Redux stuff
import configureStore from './redux/configStore';
import { Provider } from 'react-redux';
const store = configureStore();
import { fetchShops } from './redux/actions';

// Container components
import HomePage from './components/pages/HomePage'
import NotFoundPage from './components/pages/NotFoundPage'

store.dispatch(fetchShops({}));

export default class App extends React.Component {
  render() {
    console.log("Rendering App...")
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route exact path='/' component={HomePage} />
            <Route component={NotFoundPage} />
          </Switch>
        </BrowserRouter>
    </Provider>
    )
  }
}
