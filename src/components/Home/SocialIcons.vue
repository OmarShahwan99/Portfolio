<template>
    <li>
        <a :href="`https://${link}`" target="_blank">
            <font-awesome-icon :icon="['fab', icon]" class="icon"/>
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
    border: 1px solid var(--dark-alt);
    padding: 7px;
    border-radius: 50%;
    color: var(--dark-alt);
    transition: 0.2s;
}
.icon:hover {
    background-color: var(--dark-alt);
    color: var(--light);
}

</style>