import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: {
      name: 'page3'
    }
  },
  {
    path: "/page3",
    name: "page3",
    component: () =>
      import(/* webpackChunkName: "page3" */ "../views/Page3.vue"),
  },
  {
    path: "/page4",
    name: "page4",
    component: () =>
      import(/* webpackChunkName: "page4" */ "../views/Page4.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
