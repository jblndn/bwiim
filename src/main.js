import { createApp } from 'vue'
import App from './App.vue'
import './assets/styles/index.css';
import router from './router'
import {createStore} from "vuex";

createApp(App).use(router).mount('#app')

const store = createStore({
    state() {
        return {

        }
    }
})

App.use(store)
