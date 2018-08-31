import { combineReducers } from 'redux'
import {
  REQUEST_SHOPS,
  RECEIVE_SHOPS
} from './actions'

function coffeeShops(state = { isFetching: false, shops: [] }, action) {
  switch (action.type) {
    case REQUEST_SHOPS:
      return Object.assign({}, state, {
        isFetching: true,
      })
    case RECEIVE_SHOPS:
      return Object.assign({}, state, {
        isFetching: false,
        shops: action.shops,
      })
    default:
      return state
  }
}

const rootReducer = combineReducers({
  coffeeShops
})

export default rootReducer
