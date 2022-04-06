import AreaSelect from './areaSelect/index'
import IconSelect from './iconSelect/index'
import Trend from './trend/index'
import {App} from "vue"

const components = [
    AreaSelect,
    IconSelect,
    Trend
]

export default {
    install(app: App) {
        components.map(item => {
            app.use(item)
        })
    }
}
