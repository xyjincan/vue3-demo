import { createApp } from 'vue'
import { createStore } from 'vuex'
import { createRouter, createWebHashHistory } from 'vue-router'



import { Home,Dashboard,About } from './route-item.js';
import AppStore from './app-store.js'

// vue应用根组件
import AppCount from './app-count.js'
// VUE子组件
import AppTest from './app-test.js'
// 
// 基于路由切换vue组件
const routes = [
    { path: '/', component: Home },
    { path: '/dashboard', component: Dashboard },
    { path: '/about', component: About },
]
const router = createRouter({
    // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
    history: createWebHashHistory(),
    routes, // `routes: routes` 的缩写
})

// vuex
const store = createStore(AppStore)

const app = createApp(AppCount)
app.component('AppTest', AppTest)

app.use(router)
app.use(store)
document.addEventListener('DOMContentLoaded', () => app.mount('#app'));
