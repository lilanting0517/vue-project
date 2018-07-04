// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
/* 自定义主题 */
import '@/common/css/element-variables.scss'
/* es6支持 */
import "babel-polyfill";
import {
  Autocomplete,
  Button,
  Input,
  pagination,
  Checkbox
} from 'element-ui'

Vue.use(Autocomplete)
Vue.use(Button)
Vue.use(Input)
Vue.use(pagination)
Vue.use(Input)
Vue.use(Checkbox)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>'
})
