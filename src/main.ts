import App from './App.vue'
import { store, key } from './store'
import { createApp } from 'vue'

createApp(App)
  .use(store, key)
  .mount('#app')
