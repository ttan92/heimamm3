import Vue from 'vue'
import App from './App.vue'
//导入
import router from './router/router' //导入路由
import ElementUI from 'element-ui' // 导入饿了么
import 'element-ui/lib/theme-chalk/index.css' //饿了么样式

Vue.use(ElementUI);
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
