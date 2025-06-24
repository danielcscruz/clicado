import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css';
import '@/assets/scss/style.scss';
import '@/assets/libs/@iconscout/unicons/css/line.css';
import '@/assets/libs/@mdi/font/css/materialdesignicons.min.css';
import bootsratp from 'bootstrap/dist/js/bootstrap.bundle.js'
import router from './router';

const app = createApp(App)
app.use(router)
app.use(bootsratp)
app.mount('#app')
