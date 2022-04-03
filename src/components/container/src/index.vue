<template>
    <el-container>
        <el-aside width="auto">
            <nav-side :isCollapse="isCollapse"></nav-side>
        </el-aside>
        <el-container>
            <el-header>
                <nav-head v-model:isCollapse="isCollapse"></nav-head>
            </el-header>
            <el-main>
                <router-view></router-view>
            </el-main>
        </el-container>
    </el-container>
</template>

<script setup lang="ts">
    import { ref } from 'vue'
    import NavHead from '../navHead/index.vue'
    import NavSide from '../navSide/index.vue'

    const isCollapse = ref(false)
</script>

<style scoped>
.el-header{
  padding: 0;
}
</style>
