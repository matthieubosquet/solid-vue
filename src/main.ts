import { store, key } from './store'
import { createApp } from 'vue'
import App from './App.vue'

createApp(App)
  .use(store, key)
  .mount('#app')
