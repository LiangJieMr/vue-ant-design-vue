import about from "@/views/page/main/about.vue";
import hello from "@/views/page/main/hello.vue";
import index from "@/views/page/main/index.vue";
import login from "@/views/page/main/login.vue";
import Main from "@/views/page/main/main.vue";
const loginRouter = {
  path: "/login",
  name: "login",
  meta: {
    hideInMenu: false
  },
  component: login
};

// 作为Main组件的子页面展示并且在左侧菜单显示的路由写在appRouter里
const appRouter = {
  path: "/",
  name: "home",
  component: Main,
  children: [
    {
      path: "/",
      name: "index",
      component: index
    },
    {
      path: "about",
      name: "about",
      component: about,
      meta: {
        requireAuth: true
      }
    },
    {
      path: "hello",
      name: "hello",
      component: hello
    }
  ]
};

export default [appRouter, loginRouter];
