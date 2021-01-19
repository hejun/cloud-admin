import {computed, InjectionKey} from 'vue'
import {createStore, Store, useStore as baseUseStore} from 'vuex'
import Token from "../assets/vo/Token"

export interface State {
  token: Token | null
}

export const key: InjectionKey<Store<State>> = Symbol()

export const store = createStore<State>({
  state: {
    token: {
      accessToken: '',
      tokenType: '',
      refreshToken: '',
      expiresAt: 0,
      scope: ''
    }
  },
  getters: {
    authorized(state: State) {
      return computed(() => state.token && state.token.expiresAt > (new Date().getTime() + 5000))
    }
  },
  mutations: {
    updateToken(state, token: Token) {
      state.token = token
    }
  },
  actions: {
    updateToken(context, token: Token) {
      context.commit('updateToken', token)
    }
  },
  modules: {}
})

export function useStore(): Store<State> {
  return baseUseStore(key)
}
