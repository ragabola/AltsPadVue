import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./scss/main.scss";
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCalendar } from '@fortawesome/free-solid-svg-icons'
import { faCopy } from '@fortawesome/free-solid-svg-icons'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
import { faAngleUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faCalendar)
library.add(faCopy)
library.add(faAngleDown)
library.add(faAngleUp)
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
