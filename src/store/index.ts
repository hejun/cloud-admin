import {InjectionKey} from 'vue'
import {createStore, Store, useStore as baseUseStore} from 'vuex'

export interface State {
}

export const key: InjectionKey<Store<State>> = Symbol()

export const store = createStore<State>({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {}
})

export function useStore(): Store<State> {
  return baseUseStore(key)
}
