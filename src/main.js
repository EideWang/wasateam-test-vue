import { createApp } from "vue";
import App from "./App.vue";
import AppButton from "./components/AppButton.vue";
import { createMetaManager } from "vue-meta";
import router from "./router";

const app = createApp(App);
app.component("AppButton", AppButton).use(createMetaManager()).use(router).mount("#app");
