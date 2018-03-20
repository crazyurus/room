import Vue from 'vue'

import Framework7 from 'framework7'
import Framework7Vue from 'framework7-vue'
import Framework7Theme from 'framework7/dist/css/framework7.ios.min.css'
import Framework7ThemeColors from 'framework7/dist/css/framework7.ios.colors.min.css'

import 'vue-layer-mobile/need/layer.css'
import './css/app.css'
import Routes from './routes.js'
import './css/layer.css'
import App from './app'

import axios from 'axios'
import layer from 'vue-layer-mobile'

Vue.use(Framework7Vue)
Vue.use(layer)
Vue.prototype.$http = axios
Vue.prototype.$sno = window.sno
if (process.env.NODE_ENV !== 'production') require('../mock.js')

new Vue({
  el: '#app',
  framework7: {
    root: '#app',
    routes: Routes,
    pushState: true,
    pushStateSeparator: '#',
    modalTitle: '自习室',
    modalButtonOk: '确定',
    modalButtonCancel: '取消'
  },
  render: h => h(App)
});

window.addCourse = function (course) {
  let $modal = document.querySelector('.layui-m-layer');
  $modal.style.display = 'none';
  f7.confirm(`是否将 <b>${course.name}</b> 添加到你的个人课表中？`, () => {
    f7.showIndicator();
    $modal.remove();
    document.querySelector('.view-main').style.filter = '';
    axios.post('/table/course/add', { course }).then(() => {
      f7.hideIndicator();
      let message = '已将该课程添加到你的个人课表中';
      if (typeof token !== 'undefined' && token.showNativeToast) token.showNativeToast(message, true);
      else f7.alert(message);
    }).catch(() => {
      f7.alert('网络请求错误');
    });
  }, () => {
    $modal.style.display = 'block';
  });
}