<template>
    <div>
        <slot name="up"></slot>
        <slot name="down"></slot>
        <div
            v-if="!slots.up"
            :style="{color: upColor}">
            {{ upText }}
            <component
                :is="`el-icon${toLine(upIcon)}`"></component>
        </div>
        <div
            v-if="!slots.down"
            :style="{color: downColor}">
            {{ downText }}
            <component :is="`el-icon${toLine(downIcon)}`"></component>
        </div>
    </div>
</template>

<script setup lang="ts">
    import {PropType, useSlots} from 'vue'
    import * as Icons from '@element-plus/icons-vue'
    import {toLine} from '@/utils'

    type icon = keyof typeof Icons
    const props = defineProps({
        upText: {
            type: String,
            default: '文字1'
        },
        upColor: {
            type: String,
            default: '#ssaaxc'
        },
        upIcon: {
            type: String as PropType<icon>,
            default: 'ArrowUp'
        },
        downIcon: {
            type: String as PropType<icon>,
            default: 'ArrowDown'
        },
        downText: {
            type: String,
            default: '文字2'
        },
        downColor: {
            type: String,
            default: '#sawedc'
        }
    })

    const slots = useSlots()
</script>

<style scoped>

</style>
