<template>
    <router-link :to="link" class="button">
        <span>
            <font-awesome-icon :icon="['fas', icon]" class="icon"/>
        </span>
        <span class="text" :class="showTitle">{{ title }}</span>
    </router-link>
</template>

<script>
export default {
    props: ['title', 'icon', 'link', 'isOpen'],
    computed: {
        showTitle() {
            return { 'showed': this.isOpen }
        }
    }
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
    position: relative;
}
@media (max-width: 450px) {
    .button {
        padding: 0.7rem 0.5rem;
    }
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
    background-color: var(--gray);
}
.icon {
    font-size: 2rem;
}
@media (max-width: 450px) {
    .icon {
        font-size: 1.5rem;
    }
}
.text {
    opacity: 0;
    transition: 0.2s ease-out;
}
.text.showed {
    opacity: 1;
}
</style>