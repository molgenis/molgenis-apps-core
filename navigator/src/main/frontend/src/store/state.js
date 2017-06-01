// @flow
export type Package = {
  id: string,
  label: string,
  description: ?string
}

export type State = {
  error: ?string,
  token: ?string,
  query: ?string,
  packages: Array<Package>,
  entities: Array<any>,
  selectedPackage: any,
  path: Array<Package>
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
