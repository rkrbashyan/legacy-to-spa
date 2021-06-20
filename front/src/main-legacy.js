// Legacy app entry point

import Vue from "vue";
import AppLegacy from "./AppLegacy.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(AppLegacy),
}).$mount("#legacy-app");


// Override vue router link items
document.querySelectorAll('.spa-menu-item').forEach(el => {
  el.addEventListener('click', event => {
      event.stopPropagation();
      event.preventDefault();
      window.location = el.dataset.url;
  });
});
