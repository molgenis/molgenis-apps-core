// @flow
export type State = {
  error: ?string,
  token: ?string,
  query: ?string,
  packages: Array<any>,
  entities: Array<any>,
  selectedPackage: any,
  path: Array<any>
}

const state: State = {
  error: undefined,
  token: undefined,
  query: undefined,
  packages: [],
  entities: [],
  selectedPackage: undefined,
  path: []
}

export default state
