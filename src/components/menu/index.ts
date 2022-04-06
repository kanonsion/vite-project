import Menu from './src/index.vue'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import MenuTsx from './src/index.tsx'
import {App} from "vue"

export default {
    install(app: App) {
        app.component('CMenu', Menu)
        app.component('MenuTsx', MenuTsx)
    }
}
