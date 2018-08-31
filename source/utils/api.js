import qs from "qs"
import devData from 'app/utils/devData'

const devUrl  = "http://localhost:3000/api/v1"
const prodUrl = ""
const baseUrl = process.env.NODE_ENV == 'production' ? prodUrl : devUrl

const defaultOptions = {
  headers: {
    "Content-Type": "application/json",
    "Accept": "application/json"
  }
}

function apiCall(path, options, data) {
  options = { ...defaultOptions, ...options }

  const queryString = options.params ? qs.stringify(options.params) : null;
  let url = baseUrl + path;
  url = queryString ? `${url}?${queryString}` : url;

  if (data) { options.body = data; }
  // console.log("Fetching url and options: ", url, options)
  return fetch(url, options)
}

export default {
  fetchShops(){
    // return fetch('https://gist.githubusercontent.com/paulmederos/39c94e3381b6d16f712f43782715f897/raw/f607142f43ae4da6e3aa6d5fb5f0d6d005e8c8f2/coffee-shops.json')
    const mockResponse = new Response(JSON.stringify(devData.coffeeShops), {
      status: 200, headers: { 'Content-type': 'application/json' }
    })
    return Promise.resolve(mockResponse)
  },
}
