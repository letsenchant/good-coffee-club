
export const REQUEST_SHOPS = 'REQUEST_SHOPS'
function requestShops(params) {
  return {
    type: REQUEST_SHOPS,
    params
  }
}

export const RECEIVE_SHOPS = 'RECEIVE_SHOPS'
function receiveShops(json) {
  return {
    type: RECEIVE_SHOPS,
    shops: json.data.children.map(child => child.data)
  }
}

export function fetchShops(params) {
  // Thunk middleware knows how to handle functions.
  // It passes the dispatch method as an argument to the function,
  // thus making it able to dispatch actions itself.
  return function (dispatch) {
    dispatch(requestShops(params))
    return fetch(`https://www.reddit.com/r/fortnitebr.json`)
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
