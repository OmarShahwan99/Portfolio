<template>
    <div class="portfolio">
        <div class="container">
            <!-- <div class="features">
                <features-boxes></features-boxes>
            </div> -->
            <projects-slider></projects-slider>
        </div>
    </div>
</template>

<script>
import ProjectsSlider from '../components/Portfolio/Projects/MyProjects.vue';
// import FeaturesBoxes from '../components/Portfolio/Features/FeaturesBoxes.vue';

export default {
    components: {
        ProjectsSlider,
        // FeaturesBoxes,
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