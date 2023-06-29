import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faUser, faHome, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faInstagram, faDev } from '@fortawesome/free-brands-svg-icons';


const feather = require('feather-icons');
feather.replace();

import './app.css';


library.add(faUser, faHome, faLinkedin, faInstagram, faDev, faChevronUp);

createApp(App)
    .component('font-awesome-icon', FontAwesomeIcon)
    .use(router)
    .mount('#app');

document.querySelector('body').classList.add('bg-primary-dark');