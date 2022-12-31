import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import BaseButton from './UI/BaseButton.vue';
import BaseTitle from './UI/BaseTitle.vue';

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import {faEye, faLaptopCode, faCode, faCheckCircle, faCircleExclamation, faHouse, faAddressCard, faBriefcase, faEnvelope, faCircleInfo } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF, faGithub, faLinkedinIn, faTelegram } from '@fortawesome/free-brands-svg-icons';

/* add icons to the library */
library.add(
    faEye,
    faFacebookF,
    faGithub,
    faTelegram,
    faLinkedinIn,
    faLaptopCode,
    faCode,
    faCheckCircle,
    faCircleExclamation,
    faHouse,
    faAddressCard,
    faBriefcase,
    faEnvelope,
    faCircleInfo
);

const app = createApp(App)

app.component('font-awesome-icon', FontAwesomeIcon)

app.component('base-button', BaseButton);
app.component('base-title', BaseTitle);

app.use(router);

app.mount('#app')

