<template>
    <aside :class="openSidebar">
        <div class="header">
            <my-logo :isOpen="sidebarIsOpen"></my-logo>
            <MenuToggle :isOpen="sidebarIsOpen"/>
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
    props: ['items', 'sidebarIsOpen'],
    inject: ['toggleSidebar'],
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
@media (max-width: 767px) {
    aside {
        display: none;
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