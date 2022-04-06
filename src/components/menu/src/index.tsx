import {PropType, defineComponent} from "vue"
import {MenuItem} from "@/components/menu/src/type"
import * as Icons from '@element-plus/icons-vue'

export default defineComponent({
    props: {
        data: {
            type: Array as PropType<MenuItem[]>,
            required: true
        }
    },
    setup(props) {
        const deepRender = (data:MenuItem[]) => {
            return data.map((item, index) => {
                const icon = item.icon ? Icons[item.icon] : <i></i>
                if (item.children){
                    const slots = {
                        title: () => {
                            return <>
                                <icon/>
                                {item.name}
                            </>
                        }
                    }
                    return (
                        <el-sub-menu index={item.index} v-slots={slots}>
                            {deepRender(item.children)}
                        </el-sub-menu>
                    )
                } else {
                    return (
                        <el-menu-item index={item.index}>
                            <icon/>
                            {item.name}
                        </el-menu-item>
                    )
                }
            })
        }

        return () => {
            return (
                <el-menu class='el-menu-vertical'>
                    {deepRender(props.data)}
                </el-menu>
            )
        }
    }
})
