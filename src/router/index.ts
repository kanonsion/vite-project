import {createRouter, createWebHistory} from 'vue-router'
import type {App} from "vue"

import a from '@/page/a.vue'
import Container from './../components/container/src/index.vue'
import ChooseIcon from './../page/choose-icon.vue'
import ChooseArea from './../page/choose-area.vue'
import TrendPage from './../page/trend-page.vue'
import Menu from './../page/menu.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: Container,
            children: [
                {
                    path: '/a',
                    component: a
                },
                {
                    path: '/chooseIcon',
                    component: ChooseIcon
                },
                {
                    path: '/chooseArea',
                    component: ChooseArea
                },
                {
                    path: '/trendPage',
                    component: TrendPage
                },
                {
                    path: '/menu',
                    component: Menu
                }
            ]
        },
    ]
})

export function resetRoute(): void {
    router.getRoutes().forEach(item => {
        const {name} = item
        if (name) {
            router.hasRoute(name) && router.removeRoute(name)
        }
    })
}

export default router
