import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import context from './plugins/context'
import vuetify from './plugins/vuetify'
import 'material-design-icons-iconfont/dist/material-design-icons.css' 


Vue.config.productionTip = false
Vue.use(context);
Vue.use(vuetify, {
  iconfont: 'md'
})

new Vue({
  store,
  router,
  vuetify,
  render: function (h) { return h(App) }
}).$mount('#app')
