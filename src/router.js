import { createRouter, createWebHistory } from 'vue-router';
import HomePage from './views/HomePage.vue';
import AboutPage from './views/AboutPage.vue';
import PortfolioPage from './views/PortfolioPage.vue';
import ContactPage from './views/ContactPage.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: HomePage },
        { path: '/about', component: AboutPage },
        { path: '/portfolio', component: PortfolioPage },
        { path: '/contact', component: ContactPage }
    ],
    linkActiveClass: 'active',
})

export default router;