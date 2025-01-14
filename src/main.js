import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { MaskInput } from "vue-mask-next";




createApp(App).component("MaskInput", MaskInput).use(store).use(router).mount('#app')
