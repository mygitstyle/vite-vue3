/*
 * @Author: xiaoHui
 * @Date: 2021-04-26 15:01:44
 * @LastEditors: xiaoHui
 * @LastEditTime: 2021-04-26 15:19:43
 * @Description:
 * @Version: 1.0.0
 * @FilePath: \vite-project\src\main.ts
 */
import { createApp } from 'vue'
import App from './App.vue'
import store from './store/index'
import router from './router/index'
import ElementPlus from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css'
const app = createApp(App)

app.use(store)
app.use(router)
app.use(ElementPlus)
app.mount('#app')
