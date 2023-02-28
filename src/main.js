import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/main.css'
// -- Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
// -- icones
import { fa } from "vuetify/iconsets/fa";
import { aliases, mdi } from "vuetify/lib/iconsets/mdi";
import "@mdi/font/css/materialdesignicons.css"; 
import "@fortawesome/fontawesome-free/css/all.css";
    

const vuetify = createVuetify({
    theme: {
        defaultTheme: "dark",
        },
    icons: {
        defaultSet: "mdi",
        aliases,
        sets: {
            mdi,
            fa,
        },
    },
    components,
    directives,
})

const app = createApp(App)
app.use(router)
app.use(vuetify)
app.mount('#app')

