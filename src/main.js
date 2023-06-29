import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import '../firebase';

const feather = require('feather-icons');
feather.replace();

import './app.css';

createApp(App)
    .use(router)
    .mount('#app');

document.querySelector('body').classList.add('bg-primary-dark');