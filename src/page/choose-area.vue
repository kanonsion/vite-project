<template>
    <div>
        <area-select v-model:value="area"></area-select>
        {{ area }}
    </div>
</template>

<script setup lang="ts">

    import AreaSelect from '../components/areaSelect/src/index.vue'
    import { ref } from 'vue'

    const area = ref({})
</script>

<style scoped>

</style>
