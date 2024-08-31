import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createVuetify } from 'vuetify'
import 'vuetify/styles'; // Import Vuetify styles
import '@mdi/font/css/materialdesignicons.css'; // Import Material Design Icons
import 'bootstrap/dist/css/bootstrap.css';

import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import router from './router';


const vuetify = createVuetify({
    components,
    directives,
  })

const app = createApp(App)
app.use(vuetify)
app.use(router)

app.mount('#app')