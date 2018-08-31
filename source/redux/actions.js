
export const REQUEST_SHOPS = 'REQUEST_SHOPS'
function requestShops(params) {
  return {
    type: REQUEST_SHOPS,
    params
  }
}

export const RECEIVE_SHOPS = 'RECEIVE_SHOPS'
function receiveShops(json) {
  console.log("Received shops:", json)
  return {
    type: RECEIVE_SHOPS,
    shops: json.coffeeShops
  }
}

export function fetchShops(params) {
  // Thunk middleware knows how to handle functions.
  // It passes the dispatch method as an argument to the function,
  // thus making it able to dispatch actions itself.
  return function (dispatch) {
    dispatch(requestShops(params))
    return fetch(`https://gist.githubusercontent.com/paulmederos/39c94e3381b6d16f712f43782715f897/raw/f607142f43ae4da6e3aa6d5fb5f0d6d005e8c8f2/coffee-shops.json`)
      .then(
        response => response.json(),
        // Do not use catch, because that will also catch
        // any errors in the dispatch and resulting render,
        // causing a loop of 'Unexpected batch number' errors.
        // https://github.com/facebook/react/issues/6895
        error => console.log('An error occurred.', error)
      )
      .then(json =>
        // Here, we update the app state with the results of the API call.
        dispatch(receiveShops(json))
      )
  }
}
