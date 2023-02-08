import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import BaseButton from './UI/BaseButton.vue';
import BaseTitle from './UI/BaseTitle.vue';
import BaseModal from './UI/BaseModal.vue';

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faEye, faLaptopCode, faCode, faCheckCircle, faCircleExclamation, faHouse, faAddressCard, faBriefcase, faEnvelope, faCircleInfo, faGear  } from '@fortawesome/free-solid-svg-icons'
import { faBootstrap, faCss3, faFacebookF, faGithub, faHtml5, faJs, faLinkedinIn, faReact, faTelegram, faVuejs } from '@fortawesome/free-brands-svg-icons';

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
    faCircleInfo,
    faGear,
    faHtml5,
    faCss3,
    faJs,
    faVuejs,
    faReact,
    faBootstrap,
);
const app = createApp(App)

app.component('font-awesome-icon', FontAwesomeIcon)

app.component('base-button', BaseButton);
app.component('base-title', BaseTitle);
app.component('base-modal', BaseModal)

app.use(router);

app.mount('#app')

