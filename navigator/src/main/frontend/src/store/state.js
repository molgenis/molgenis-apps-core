// @flow
export type State = {
  message: string,
  date: Date
}

const message: string = 'Hallo'
const state: State = {
  message,
  date: new Date(),
  token: undefined,
  query: undefined,
  packages: [],
  entities: [],
  selectedPackage: undefined,
  error: undefined
}

export default state
