import {
    checkData
} from '@/api/article'

checkData()

import {
    createApp
} from 'vue'
import App from './App.vue'
import router from './router'

// 代码高亮
import 'highlight.js/styles/stackoverflow-light.css'
import 'highlight.js/lib/common';
import hljsVuePlugin from "@highlightjs/vue-plugin";

createApp(App)
    .use(router)
    .use(hljsVuePlugin)
    .mount('#wrapper')