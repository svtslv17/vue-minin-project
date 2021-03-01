import { createApp } from "vue";
import App from "./App.vue";
// import { ValidationProvider } from "vee-validate";
import router from "./router";
import store from "./store";
import "materialize-css/dist/js/materialize.min";
import "./registerServiceWorker";

createApp(App)
  // .use(ValidationProvider)   .... из документации всё верно!!! так и добавишь
  .use(store)
  .use(router)
  .mount("#app");
