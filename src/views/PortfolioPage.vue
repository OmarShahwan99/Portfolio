<template>
    <div class="portfolio">
        <base-title>Features & Projects</base-title>
        <div class="container">
            <div class="features">
                <features-boxes></features-boxes>
            </div>
            <div class="projects">
                <projects-slider></projects-slider>
            </div>
        </div>
    </div>
</template>

<script>
import ProjectsSlider from '../components/Portfolio/Projects/ProjectsSlider.vue';
import FeaturesBoxes from '../components/Portfolio/Features/FeaturesBoxes.vue';

export default {
    components: {
        ProjectsSlider,
        FeaturesBoxes,
    }
}
</script>

<style scoped>
.title {
    text-align: center;
}
@media(max-width: 767px) {
    .title {
        font-size: 22px;
    }
}
.portfolio {
    height: 100%;
}
.container {
    width: 100%;
    display: flex;
    gap: 20px;
    align-items: center;
    justify-content: center;
    padding-top: 60px;
}
@media (max-width: 991px) {
    .container {
        flex-direction: column;
    }
}
.features {
    width: 100%;
}
.projects {
    width: 470px;
}
@media (max-width: 645px) {
    .projects {
        width: 350px;
    }
}
@media (max-width: 525px) {
    .projects {
        width: 250px;
    }
}
.title {
    margin-bottom: 20px;
}
</style>