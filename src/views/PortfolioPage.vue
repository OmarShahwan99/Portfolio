<template>
    <div class="portfolio">
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
.projects {
    width: 500px;
}
@media (max-width: 645px) {
    .projects {
        width: 350px;
    }
}

@media (max-width: 450px) {
    .projects {
        width: 335px;
    }
}
.title {
    margin-bottom: 20px;
}
</style>