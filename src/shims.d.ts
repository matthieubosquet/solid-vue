/* eslint-disable */
import { ComponentCustomProperties } from 'vue'
import { Store } from 'vuex'
import type { State } from './store'

declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

declare module '@vue/runtime-core' {
  // provide typings for `this.$store`
  interface ComponentCustomProperties {
    $store: Store<State>
  }
}
