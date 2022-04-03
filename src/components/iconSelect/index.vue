<template>
    <div>
        <slot></slot>
        <el-dialog v-model="dialogVisible" :title="title" @close="handleClose"></el-dialog>
    </div>
</template>

<script lang="ts">
    export default {
        name: 'icon-select'
    }
</script>

<script lang="ts" setup>
  import {ref, watch} from "vue";

  const props = defineProps<{
    isVisible: boolean,
    title: string
  }>()
  const emits = defineEmits(['update:isVisible'])

  const dialogVisible = ref(props.isVisible)
  const handleClose = () => {
      emits('update:isVisible', false)
  }

  watch(() => props.isVisible, (val) => {
    dialogVisible.value = val
  })
</script>

<style scoped>

</style>
