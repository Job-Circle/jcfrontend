import './assets/main.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import i18n from './i18n'

import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'
import 'bootstrap-icons/font/bootstrap-icons.css'

async function initApp() {
  const app = createApp(App)
  app.use(createPinia()).use(router).use(i18n)

  app.mount('#app')
}

initApp().catch((error) => {
  console.error('Failed to initialize the app:', error)
})
