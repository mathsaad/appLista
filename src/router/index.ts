import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import Tabs from '../views/Main.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/tabs/chats'
  },
  {
    path: '/tabs/',
    component: Tabs,
    children: [
      {
        path: '',
        redirect: '/tabs/chats'
      },
      {
        path: 'chats',
        component: () => import('@/views/pages/Chats.vue')
      },
      {
        path: 'detail',
        name: 'detail',
        props: (route) => ({
          person: Object,
          ...route.params
        }),
        component: () => import('@/views/pages/Detail.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
