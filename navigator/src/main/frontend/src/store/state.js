// @flow
export type Parent = {
  id: string,
}

export type Package = {
  id: string,
  label: string,
  description: ?string,
  parent: Parent
}

export type Entity = {
  id: string,
  type: string,
  label: string,
  description: ?string
}

export type State = {
  error: ?string,
  token: ?string,
  query: ?string,
  packages: Array<Package>,
  entities: Array<Entity>,
  path: Array<Package>
}

const state: State = {
  error: undefined,
  token: undefined,
  query: undefined,
  packages: [],
  entities: [],
  path: []
}

export default state
