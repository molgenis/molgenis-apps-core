import fetch from 'isomorphic-fetch'

const jsonContentHeaders = {
  'Accept': 'application/json',
  'Content-Type': 'application/json'
}

function fetchForStatus (url, settings) {
  return fetch(url, settings)
}

function fetchAndHandleResponse (url, settings) {
  return fetch(url, settings)
    .then(response => response.json()
      .then(json => ({json, response})))
    .then(({json, response}) => {
      if (!response.ok) {
        return Promise.reject(json)
      }
      return json
    })
}

export function post (server, uri, data, token) {
  const url = server.apiUrl + uri
  const settings = {
    method: 'post',
    headers: jsonContentHeaders,
    body: JSON.stringify(data)
  }

  if (token) {
    // for cross-origin requests, use a molgenis token
    settings.headers = {...settings.headers, 'x-molgenis-token': token}
    settings.mode = 'cors'
  } else {
    // for same origin requests, use the JSESSIONID cookie
    settings.credentials = 'same-origin'
  }

  return fetchForStatus(url, settings)
}

function callApi (server, uri, method, token) {
  const url = server.apiUrl + uri
  const settings = {
    method: method,
    headers: jsonContentHeaders
  }

  if (token) {
    // for cross-origin requests, use a molgenis token
    settings.headers = {...jsonContentHeaders, 'x-molgenis-token': token}
  } else {
    // for same origin requests, use the JSESSIONID cookie
    settings.credentials = 'same-origin'
  }

  return fetchAndHandleResponse(url, settings)
}

export function get (server, uri, token) {
  return callApi(server, uri, 'get', token)
}

export function login (username, password) {
  return fetch('/api/v1/login', {
    method: 'post',
    headers: jsonContentHeaders,
    body: JSON.stringify({username: username, password: password})
  }).then(response => response.json())
}

export function logout (server, token) {
  return fetch(server.apiUrl + 'v1/logout', {
    method: 'get',
    headers: {...jsonContentHeaders, 'x-molgenis-token': token}
  })
}

export default {login, logout, get, callApi, post}
