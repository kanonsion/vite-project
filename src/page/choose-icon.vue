<template>
    <div>
        <icon-select v-model:isVisible="isVisible" title="选择图标">
            <el-button @click="handleClick">选择图标</el-button>
        </icon-select>
    </div>
</template>

<script lang="ts" setup>
    import IconSelect from '../components/iconSelect/index.vue'
    import { ref } from 'vue'

    const isVisible = ref(false)
    const handleClick = () => {
        isVisible.value = true
    }
</script>

<style scoped>

</style>
