<template>
    <menu-tsx
        :data="data"
        defaultActive="/"
        :collapse="isCollapse"
        :router="true">
    </menu-tsx>
</template>

<script lang="ts">
    export default {
        name: 'nav-side'
    }
</script>

<script setup lang="ts">
    import {ref} from "vue"
    import {MenuItem} from './../../menu/src/type'

    const props = defineProps<{
        isCollapse: boolean
    }>()

    const data = ref<MenuItem[]>([
        {
            icon: 'ColdDrink',
            name: '首页',
            index: '/'
        },
        {
            icon: 'Cpu',
            name: '图标选择器',
            index: '/chooseIcon'
        },
        {
            icon: 'Collection',
            name: '省市区选择',
            index: '/chooseArea'
        },
        {
            icon: 'Crop',
            name: '趋势标记',
            index: '/trendPage'
        },
        {
            icon: 'Menu',
            name: '导航菜单',
            index: '/menu'
        }
    ])
</script>

<style scoped>
.el-menu-vertical:not(.el-menu--collapse) {
  width: 200px;
}
</style>
