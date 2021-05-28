/* eslint-disable */
import type { ComponentCustomProperties } from 'vue'
import type { Store } from 'vuex'
import type { State } from './store'

declare module '@vue/runtime-core' {
  // provide typings for `this.$store`
  interface ComponentCustomProperties {
    $store: Store<State>
  }
}
