import Vue from "vue";

import router from "@/router/index.js";
import store from "@/store/index.js";

import { Layout, Menu, Icon, Dropdown } from "ant-design-vue";

import App from "./App.vue";

Vue.component(Layout.name, Layout);
Vue.component(Layout.Sider.name, Layout.Sider);
Vue.component(Layout.Header.name, Layout.Header);
Vue.component(Layout.Content.name, Layout.Content);
Vue.component(Menu.name, Menu);
Vue.component(Menu.Item.name, Menu.Item);
Vue.component(Icon.name, Icon);
Vue.component(Dropdown.name, Dropdown);

Vue.config.productionTip = false;

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount("#app");

router.beforeEach((to, from, next) => {
  if (to.meta.requireAuth) {
    if (store.getters.resturantName) {
      next();
    } else {
      next({
        path: "/login",
        query: { redirect: to.path }
      });
    }
  } else {
    next();
  }
});
