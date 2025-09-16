import { createApp } from 'vue'


//import the components
import App from './App.vue'
import router from './router'

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css';


// Import BootstrapVue
import { BootstrapVue3 } from 'bootstrap-vue-3';


// Create new Vue project and connect to the HTML where the ID is "app"
const app = createApp(App);
app.use(router)
app.use(BootstrapVue3);

app.mount('#app');