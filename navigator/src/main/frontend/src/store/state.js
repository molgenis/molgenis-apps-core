// @flow
export type State = {
  message: string,
  date: Date
}

const message: string = window.__INITIAL_STATE__
const state: State = {
  message,
  date: new Date()
}

export default state
