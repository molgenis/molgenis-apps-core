// @flow
export type State = {
  message: string,
  date: Date
}

const message: string = 'Hallo'
const state: State = {
  message,
  date: new Date()
}

export default state
