<template>
    <li>
        <a :href="`https://${link}`">
            <font-awesome-icon :icon="['fab', icon]" class="icon"/>
            <font-awesome-icon :icon="['fab', icon]" class="hovered-icon"/>
        </a>
    </li>
</template>

<script>
export default {
    props: ['icon', 'link']
}
</script>

<style scoped>
.icon {
    color: var(--light);
    font-size: 28px;
}
.hovered-icon {
    position:absolute;
    color: var(--light);
    font-size: 68px;
    transition: 0.3s; 
    top: -80px;
    right: 15px;
    font-size: 140px;
    opacity: 0.2;
    display: none;
}
a:hover .hovered-icon {
    display:block;
}
</style>
