import "primeflex/primeflex.css";
import "primevue/resources/themes/lara-light-green/theme.css";
import "primevue/resources/primevue.min.css"; /* Deprecated */
import "primeicons/primeicons.css";

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import PrimeVue from 'primevue/config';

import Button from 'primevue/button';
import DataView from 'primevue/dataview';
import DataViewLayoutOptions from 'primevue/dataviewlayoutoptions';
import Rating from 'primevue/rating';
import Tag from 'primevue/tag';

const app = createApp(App);

app.use(router)
app.use(PrimeVue);

app.component('Button', Button);
app.component('DataView', DataView);
app.component('DataViewLayoutOptions', DataViewLayoutOptions);
app.component('Rating', Rating);
app.component('Tag', Tag);

app.mount('#app')
