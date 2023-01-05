<template>
    <div class="feature-item"
        v-for="feature in features"
        :key="feature.id">
        <font-awesome-icon :icon="['fas', feature.icon]" class="icon"/>
        <h4>{{ feature.title }}</h4>
    </div> 
</template>

<script>
export default {
    props: ['features'],
}
</script>

<style scoped>
.feature-item {
    background-color: #fff;
    box-shadow: 1px 3px 8px #ccc;
    border-radius: 12px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 15px;
    transition: 0.2s;
}
.feature-item:hover {
    transform: scale(1.05);
}
.icon {
    font-size: 24px;
    color: var(--primary-alt);
}
h4 {
    color: var(--dark)
}
p {
    color: #777;
    line-height: 1.6;
    font-size: 14px;
}
</style>