<template>
    <div class="about">
        <div class="container">
            <about-me></about-me>
            <my-skills></my-skills>
        </div>
    </div>
</template>

<script>
import AboutMe from '../components/About/AboutMe.vue';
import MySkills from '../components/About/MySkills.vue';

export default {
    components: {
        AboutMe,
        MySkills
    }
}
</script>

<style scoped>
.about {
    height: 100%;
}
.container {
    display: flex;
    gap: 20px;
    align-items: center;
    justify-content: center;
    height: calc(100% - 60px);
}
@media(max-width: 991px) {
    .container {
        flex-direction: column;
        justify-content: center;
        padding-top: 30px;
    }
}
</style>
