import { createApp } from 'vue'
import { createPinia } from 'pinia'
import '@/style.css'
import App from '@/App.vue'
import router from '@/router'
import process from 'process'

const app = createApp(App)
app.use(router)
app.use(createPinia())
app.mount('#app')
