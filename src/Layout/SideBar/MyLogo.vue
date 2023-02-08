<template>
    <div class="logo">
        <h1>&lt;<transition name="name">
            <span v-if="isOpen" :class="isOpen ? 'open' : ''">OMAR</span>
        </transition>/&gt;</h1>
    </div>
</template>

<script>
export default {
    props: ['isOpen']
}
</script>

<style scoped>
.logo h1 {
    color: var(--primary);
    font-size: 24px
}
h1 span {
    opacity: 0;
    display: inline-block;
}
h1 span.open {
    opacity: 1;
}
.name-enter-active {
    animation: nameEnter 1s ease-out;
}
@keyframes nameEnter {
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