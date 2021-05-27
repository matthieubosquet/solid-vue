import type { Session } from "@inrupt/solid-client-authn-browser";
import { InjectionKey } from "vue";
import { createStore, useStore as baseUseStore, Store } from "vuex";

export interface State {
  loggedIn: boolean,
  session: Session
}

export const key: InjectionKey<Store<State>> = Symbol()

export const store = createStore<Partial<State>>({
  state: {
    loggedIn: false
  },
  mutations: {},
  actions: {},
  modules: {}
})

export function useStore () {
  return baseUseStore(key);
}
