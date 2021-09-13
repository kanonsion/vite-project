import {createRouter, createWebHistory} from 'vue-router'
import type {App} from "vue";

import HelloWorld from '@/components/HelloWorld.vue'
import a from '@/page/a.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/', component: HelloWorld},
        {
            path: '/home',
            component: HelloWorld,
            redirect: '/home/sub1',
            children: [
                {
                    path: 'sub1',
                    component: a
                }
            ]
        }
    ]
})

export function resetRoute():void{
    router.getRoutes().forEach(item => {
        const {name} = item
        if (name){
            router.hasRoute(name) && router.removeRoute(name)
        }
    })
}

export default router
