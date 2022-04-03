import { createApp } from 'vue'
import App from './App.vue'
import router from "./router";
import {setupElement} from './libs/element'
import * as icons from '@element-plus/icons-vue'
import {toLine} from "./utils";

const app = createApp(App)

for (const key in icons) {
    app.component(toLine(`el-icon${key}`), (icons as any)[key])
}

setupElement(app)

app
    .use(router)
    .mount('#app')
