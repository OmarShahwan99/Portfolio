<template>
    <h3 v-if="open">Menu</h3>
    <div class="menu">
        <menu-item
            v-for="item in items"
            :key="item.title"
            :link="item.link"
            :title="item.title"
            :icon="item.icon"
            :open="open"
        ></menu-item>
    </div>
    <setting-item :open="open"></setting-item>
</template>

<script>
import MenuItem from './MenuItem.vue';
import SettingItem from './SettingItem.vue';

export default {
    props: ['items', 'open'],
    components: {
        MenuItem,
        SettingItem,
    }
}
</script>

<style scoped>
h3 {
    margin-bottom: 0.5rem;
    text-transform: uppercase;
    color: var(--gray);
    font-size: 1rem;
}
.menu {
    margin: 0 -1rem;
}
.flex {
    flex: 1 1 0;
}
</style>