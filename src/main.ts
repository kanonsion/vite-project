import { createApp } from 'vue'
import App from './App.vue'
import SvgIcon from './components/svg-icon.vue'
import {store, key} from "./store";
import router from "./router";
import {setupElement} from './libs/element'

const app = createApp(App)

setupElement(app)

app
    .use(store, key)
    .use(router)
    .component('svg-icon', SvgIcon)
    .mount('#app')
