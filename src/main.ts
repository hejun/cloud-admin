import {createApp} from 'vue'
import router from './router'
import {key, store} from "./store"
import App from './App.vue'
import './assets/style/index.less'

createApp(App).use(router).use(store, key).mount('#app')
