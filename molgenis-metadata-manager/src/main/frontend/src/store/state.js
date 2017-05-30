import data from './data'

export const INITIAL_STATE = window.__INITIAL_STATE__ || {}

const state = {
  alert: {
    message: null,
    type: null
  },
  entityTypeID: null,
  json: data
}

export default state
