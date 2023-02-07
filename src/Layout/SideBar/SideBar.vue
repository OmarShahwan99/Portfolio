<template>
    <aside :class="openSidebar">
        <div class="header">
            <my-logo :isOpen="sidebarIsOpen"></my-logo>
            <MenuToggle 
                @open-sidebar="toggleSidebar"
                :isOpen="sidebarIsOpen"/>
        </div>
        <div class="menu-toggle-wrap">
            <MenuList :isOpen="sidebarIsOpen"/>
        </div>
    </aside>
</template>

<script>
import MenuToggle from './MenuToggle/MenuToggle.vue';
import MenuList from './Menu/MenuLits.vue';
import MyLogo from './MyLogo.vue';

export default {
    props: ['items'],
    data() {
        return { 
            sidebarIsOpen: false,
        }
    },
    methods: {
        toggleSidebar() {
            this.sidebarIsOpen = !this.sidebarIsOpen;
            return this.sidebarIsOpen;
        },
    },
    components: {
        MenuToggle,
        MenuList,
        MyLogo
    },
    computed: {
        openSidebar() {
            return { 'is-open': this.sidebarIsOpen }
        }
    },
    
}
</script>

<style scoped>
aside {
    background-color: var(--dark-alt);
    color: var(--light);
    overflow: hidden;
    width: calc(2rem + 32px);
    min-height: 100vh;
    padding: 1rem;
    transition: 0.3s ease-out;
    position: relative;
    z-index: 500;
}
@media (max-width: 991px) {
    aside {
        position: fixed;
    }
}
.header {
    margin-bottom: 1rem;
}
.is-open {
    width: var(--sidebar-width);
}
.menu-toggle-wrap {
    display: flex;
    flex-direction: column;
}
</style>