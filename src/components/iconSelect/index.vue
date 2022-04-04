<template>
  <div>
    <slot></slot>
    <el-dialog custom-class="icon-select-dialog" v-model="dialogVisible" :title="title" @close="handleClose">
      <div class="icons">
        <div v-for="(item, index) in Object.keys(Icons)" :key="index" class="icon-item" @click="handleClickIcon(item)">
          <component :is="`el-icon${toLine(item)}`"></component>
          {{ item }}
        </div>
      </div>
    </el-dialog>
  </div>
</template>

<script lang="ts">
  export default {
    name: 'icon-select'
  }
</script>

<script lang="ts" setup>
  import {ref, watch} from "vue";
  import * as Icons from '@element-plus/icons-vue'
  import {toLine} from '../../utils'
  import {useCopy} from "../../hooks/useCopy";

  const props = defineProps<{
    isVisible: boolean,
    title: string
  }>()
  const emits = defineEmits(['update:isVisible'])

  const dialogVisible = ref(props.isVisible)
  const handleClose = () => {
    emits('update:isVisible', false)
  }
  const handleClickIcon = (val) => {
    useCopy(`el-icon${toLine(val)}`)
    emits('update:isVisible', false)
  }

  watch(() => props.isVisible, (val) => {
    dialogVisible.value = val
  })
</script>

<style scoped>
.icons{
  display: flex;
  flex-wrap: wrap;
  align-items: center;
}

.icon-item{
  width: 25%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 20px;
  cursor: pointer;
}

svg{
  width: 2em;
  height: 2em;
}
</style>
