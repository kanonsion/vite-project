import { createApp } from 'vue'
import App from './App.vue'
import SvgIcon from './components/svg-icon.vue'
import {store, key} from "./store";

createApp(App)
    .use(store, key)
    .component('svg-icon', SvgIcon)
    .mount('#app')
