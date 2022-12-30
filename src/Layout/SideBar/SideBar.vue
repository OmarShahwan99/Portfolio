<template>
    <aside :class="`${menuIsOpen ? 'is-open' : ''}`">
        <div class="header">
            <div class="logo">
                <h1>&lt;<transition name="chars"><span
                        v-if="menuIsOpen" 
                        :class="menuIsOpen ? 'open' : ''">
                        OMAR</span></transition>/&gt;</h1>
            </div>
            <MenuToggle :isOpen="menuIsOpen"/>
        </div>
        <div class="menu-toggle-wrap">
            <MenuList :items="itemsList" :open="menuIsOpen"/>
        </div>
    </aside>
</template>

<script>
import MenuToggle from './MenuToggle/MenuToggle.vue';
import MenuList from './Menu/MenuLits.vue';

export default {
    components: {
        MenuToggle,
        MenuList
    },
    data(){
        return {
            menuIsOpen: false,
            itemsList: [
                { link: '/', icon: 'home', title: 'Home' },
                { link: '/about', icon: 'visibility', title: 'About' },
                { link: '/portfolio', icon: 'work', title: 'Portfolio' },
                { link: '/contact', icon: 'mail', title: 'Contact' },
            ],
        }
    },
    methods: {
        toggleMenu() {
            this.menuIsOpen = !this.menuIsOpen;
            return this.menuIsOpen;
        },
    },
    provide() {
        return {
            toggleMenu: this.toggleMenu,
        }
    }
}
</script>

<style scoped>
aside {
    background-color: var(--dark);
    color: var(--light);
    overflow: hidden;
    width: calc(2rem + 32px);
    min-height: 100vh;
    padding: 1rem;
    transition: 0.3s ease-out;
    position: relative;
    z-index: 500;
}
@media (max-width: 768px) {
    aside {
        position: fixed;
        z-index: 99
    }
}
@media (max-width: 450px) {
    aside {
        width: calc(2rem + 8px);
    }
}
.header {
    margin-bottom: 1rem;
    
}
.is-open {
    width: var(--sidebar-width);
}
@media (max-width: 450px) {
    .is-open {
        width: calc(var(--sidebar-width) - 3rem);
    }
    .header {
        margin-left: -0.5rem;
    }
}
.logo h1 {
    color: var(--primary);
    font-size: 24px
}
@media (max-width: 450px) {
    .logo h1 {
        font-size: 18px;
    }
}
h1 span {
    opacity: 0;
    display: inline-block;
}
h1 span.open {
    opacity: 1;
}
.menu-toggle-wrap {
    display: flex;
    flex-direction: column;
}
.chars-enter-active {
    animation: charsEnter 1s ease-out;
}
.chars-enter-active.done {
    animation: none;
}
@keyframes charsEnter {
    0% {
        transform: translateY(20px);
        opacity: 0;
    }
    100% {
        transform: translateY(0);
        opacity: 1;
    }
}
</style>