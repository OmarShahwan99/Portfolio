<template>
    <div class="portfolio">
        <div class="container">
            <my-projects></my-projects>
        </div>
    </div>
</template>

<script>
import MyProjects from '../components/Portfolio/Projects/MyProjects.vue';

export default {
    components: {
        MyProjects,
    }
}
</script>

<style scoped>
.portfolio {
    height: 100%;
    padding: 40px 0;
}
.container {
    height: calc(100% - 60px);
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;
    justify-content: center;
}
@media (max-width: 991px) {
    .container {
        flex-direction: column;
    }
}
.features {
    width: 100%;
}
.title {
    margin-bottom: 20px;
}
</style>