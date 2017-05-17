// @flow
import type { State } from './state'
export const SET_MESSAGE = '__SET_MESSAGE__'

export default {
  [SET_MESSAGE] (state: State, message: string) {
    state.message = message
  }
}
