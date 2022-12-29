<template>
    <button class="menu-toggle" @click="toggleMenu">
        <span 
            class="material-symbols-outlined"
            :class="`${isOpen ? 'opened' : 'closed'}`"
            >keyboard_double_arrow_right
        </span>
    </button>
</template>

<script>
export default {
    props: ['isOpen'],
    inject: ['toggleMenu'],
}
</script>

<style scoped>
.material-symbols-outlined {
    color: var(--light);
    font-size: 2rem;
    transition: 0.2s ease-out;
}
.material-symbols-outlined.closed:hover {
    color: var(--primary);
    transform: translateX(0.5rem)
}
.material-symbols-outlined.opened {
    position: absolute;
    right: 5px;
    top: 15px;
    transform: rotate(-180deg);
}
.material-symbols-outlined.opened:hover {
    transform: translateX(-0.5rem) rotate(-180deg);
    color: var(--primary);
}
</style>