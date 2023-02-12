import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import { formatDateTimeFilter } from "@/filters/format-date-time.filter";
import { toDoStatusFilter } from "@/filters/to-do-status.filter";
import "@/styles/global.scss";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  filters: {
    formatDateTimeFilter,
    toDoStatusFilter,
  },
  render: (h) => h(App),
}).$mount("#app");
