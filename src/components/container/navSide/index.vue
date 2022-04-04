<template>
    <el-menu
        defaultActive="2"
        class="el-menu-vertical"
        :collapse="isCollapse">
        <el-menu-item index="1">
            <el-icon-menu></el-icon-menu>
            <template #title>
                首页
            </template>
        </el-menu-item>
        <el-menu-item index="2">
            <el-icon-menu></el-icon-menu>
            <template #title>
                图标选择器
            </template>
        </el-menu-item>
    </el-menu>
</template>

<script lang="ts">
    export default {
        name: 'nav-side'
    }
</script>

<script setup lang="ts">
    const props = defineProps<{
        isCollapse: boolean
    }>()
</script>

<style scoped>
.el-menu-vertical:not(.el-menu--collapse) {
  width: 200px;
}
</style>
