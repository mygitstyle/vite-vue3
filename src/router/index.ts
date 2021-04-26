/*
 * @Author: xiaoHui
 * @Date: 2021-04-26 15:10:46
 * @LastEditors: xiaoHui
 * @LastEditTime: 2021-04-26 15:12:15
 * @Description:
 * @Version: 1.0.0
 * @FilePath: \vite-project\src\router\index.ts
 */
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Home from '@/views/home.vue'
import Vuex from '@/views/vuex.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/vuex',
    name: 'Vuex',
    component: Vuex
  },
  {
    path: '/axios',
    name: 'Axios',
    component: () => import('@/views/axios.vue') // 懒加载组件
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
