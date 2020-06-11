import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import filters from "@/filters.js"; // 全局过滤器 chq 2020-06-011
import utils from "@/common/utils.js"; // 引入全局公用方法 chq 2020-06-011

// 公共样式 chq 2020-06-011
import "@/assets/styles/base.scss";
import "@/assets/styles/index.scss";
import "@/assets/styles/mixin.scss";

// 引入elementUI组件
import { Loading, Drawer } from "element-ui";

Vue.config.productionTip = false;

// 注册公用filter到Vue上 chq 2019-06-11
Object.keys(filters).forEach(filter => {
  Vue.filter(filter, filters[filter]);
});

Vue.prototype.$utils = utils;

Vue.use(Loading);
Vue.use(Drawer);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
