<template>
    <Teleport to="body">
        <div>
            <ul>
                <router-link 
                    :to="item.link"
                    v-for="item in items"
                    :key="item.icon">
                    <font-awesome-icon :icon="['fas', item.icon]" />
                </router-link>
            </ul>
        </div>
    </Teleport>
</template>

<script>

export default {
    inject: ['items'],

}
</script>

<style scoped>
div {
    width: 100%;
    background-color: var(--dark);
    display: flex;
    justify-content: center;
    align-items: center;
}
/* @media (min-width: 768px) {
    div {
        display: none;
    }
} */
ul {
    list-style: none;
    display: flex;
}
a {
    color: var(--light);
    font-size: 22px;
    padding: 10px 15px;
    transition: 0.2s;
    position:relative;
}
a:hover,
.active {
    background-color: var(--gray);
    color: var(--primary);
}
a::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 3px;
    background-color: var(--primary);
    display: none;
}
a:hover::before,
a.active::before {
    display: block;
}
</style>