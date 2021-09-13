<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
    import { useStore } from 'store/index'
    import { computed } from 'vue'
    import { mapMutations } from 'vuex'

    const store = useStore()
    const count = computed({
        get () {
            return store.state.count
        },
        set (value) {
            store.commit('increment', value)
        }
    })
    const handleClick = () => {
        count.value += 1
    }

</script>

<template>
    <el-button></el-button>
    <button @click="handleClick">{{count}}</button>
    <router-view></router-view>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
