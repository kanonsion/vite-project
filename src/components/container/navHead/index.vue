<template>
    <div class="nav-head">
        <div @click="handleToggle">
            <el-icon-expand v-if="isCollapse"></el-icon-expand>
            <el-icon-fold v-else></el-icon-fold>
        </div>
    </div>
</template>

<script setup lang="ts">
    const props = defineProps<{
      isCollapse: boolean
    }>()
    const emits = defineEmits(['update:isCollapse'])


    const handleToggle = () => {
        emits('update:isCollapse', !props.isCollapse)
    }
</script>

<script lang="ts">
  export default {
    name: 'nav-head'
  }
</script>

<style scoped>
.nav-head{
  height: 60px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #ccc;
  padding: 0 20px;
}
</style>
