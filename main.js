Vue.config.productionTip = false;
// Getting rid of console messages
import App from "./components/App.js";

new Vue({
  render: h => h(App)
}).$mount(`#app`);
