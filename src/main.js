import { createApp } from 'vue'
import './assets/styles/index.css';
import App from './App.vue'
import router from './router/index.js'
import store from './store.js'


const app = createApp(App);

app.use(router)
app.use(store)


app.mount('#app')
