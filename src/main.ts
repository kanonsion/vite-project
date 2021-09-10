import { createApp } from 'vue'
import App from './App.vue'
import SvgIcon from './components/svg-icon.vue'

createApp(App)
    .component('svg-icon', SvgIcon)
    .mount('#app')
