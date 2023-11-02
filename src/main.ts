import { createApp } from 'vue'
import App from './App.vue'
import router from './routes/route'

const app = createApp(App)

app.use(router)
app.mount('#app')
