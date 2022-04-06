<template>
    <el-menu style="width: 200px">
        <div
            v-for="(item, index) in data"
            :key="index">
            <el-menu-item
                v-if="!item.children"
                :index="item.index">
                <component :is="`el-icon${toLine(item.icon)}`"></component>
                {{ item.name }}
            </el-menu-item>
            <el-sub-menu
                v-else
                :index="item.index">
                <template #title>
                    <component
                        v-if="item.icon"
                        :is="`el-icon${toLine(item.icon)}`"></component>
                    {{ item.name }}
                </template>
                <el-menu-item
                    v-for="(subItem, subIndex) in item.children"
                    :key="subIndex"
                    :index="subItem.index">
                    <component
                        v-if="subItem.icon"
                        :is="`el-icon${toLine(subItem.icon)}`"></component>
                    {{ subItem.name }}
                </el-menu-item>
            </el-sub-menu>
        </div>
    </el-menu>
</template>

<script setup lang="ts">
    import {PropType} from "vue"
    import {MenuItem} from './type'
    import {toLine} from '@/utils'

    const props = defineProps({
        data: {
            type: Array as PropType<MenuItem[]>,
            required: true
        }
    })
</script>

<style scoped>

</style>
