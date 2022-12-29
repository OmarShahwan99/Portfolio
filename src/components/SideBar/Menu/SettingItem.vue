<template>
    <router-link to="/settings" class="button">
        <span class="material-symbols-outlined">Settings</span>
        <span class="text" :class="`${open ? 'showed' : ''}`">Settings</span>
    </router-link>
</template>

<script>
export default {
    props: ['open']
}
</script>

<style scoped>
.button {
    display: flex;
    align-items: center;
    gap: 10px;
    color: var(--light);
    padding: 0.7rem 1rem;
    transition: 0.2s ;
    position: absolute;
    margin: 0 -1rem;
    bottom: 0;
    width: 100%;
}
.button::before {
    content: '';
    position: absolute;
    background-color: var(--primary);
    height: 100%;
    width: 4px;
    right: 0;
    opacity: 0;
    transition: 0.3s;
}
.button:hover::before,
.button.active::before {
    opacity: 1;
}
.active,
.button:hover {
    color: var(--primary);
    background-color: var(--dark-alt);
}
.material-symbols-outlined {
    font-size: 2rem;
}
.text {
    opacity: 0;
    transition: 0.2s ease-out;
}
.text.showed {
    opacity: 1;
}
</style>