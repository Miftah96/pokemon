import "./assets/style.css";
import "./assets/index.css";
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App);

app.use(router)
const options = {
    // You can set your default options here
};

app.use(Toast, options);

app.mount('#app')
