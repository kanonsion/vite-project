<template>
    <div class="menu">
        <c-menu
            :data="data"
            defaultActive="1.1"></c-menu>
        <menu-tsx
            :data="data"
            defaultActive="1.1.2.2"
            :uniqueOpened="true"></menu-tsx>
    </div>
</template>

<script lang="ts" setup>
    import {ref} from "vue"
    import {MenuItem} from './../components/menu/src/type'

    const data = ref<MenuItem[]>([
        {
            name: '导航1',
            icon: 'Cherry',
            index: '1',
            children: [
                {
                    name: '导航1-1',
                    index: '1.1',
                    children: [
                        {
                            name: '导航1-1-1',
                            index: '1.1.2',
                            children: [
                                {
                                    name: '导航1-1-5',
                                    index: '1.1.2.2'
                                }
                            ]

                        }
                    ]
                }
            ]
        },
        {
            name: '导航2',
            icon: 'Cherry',
            index: '2'
        }
    ])
</script>

<style scoped>
.menu{
  display: flex;
}
</style>
